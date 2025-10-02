// ===========================
// PWA (Progressive Web App) Manager
// ===========================

(function() {
    'use strict';

    // PWA State
    let deferredPrompt;
    let isInstalled = false;

    // ===========================
    // PWA Installation
    // ===========================

    function initPWA() {
        console.log('🚀 PWA Manager: Initializing...');
        
        // Check if already installed
        checkInstallationStatus();
        
        // Listen for beforeinstallprompt
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        
        // Listen for app installed
        window.addEventListener('appinstalled', handleAppInstalled);
        
        // Register service worker
        registerServiceWorker();
        
        // Setup install button
        setupInstallButton();
        
        console.log('✅ PWA Manager: Ready!');
    }

    function checkInstallationStatus() {
        // Check if running as PWA
        if (window.matchMedia('(display-mode: standalone)').matches || 
            window.navigator.standalone === true) {
            isInstalled = true;
            console.log('📱 PWA: Running as installed app');
        }
    }

    function handleBeforeInstallPrompt(e) {
        console.log('💡 PWA: Install prompt available');
        e.preventDefault();
        deferredPrompt = e;
        
        // Show install button
        showInstallButton();
    }

    function handleAppInstalled() {
        console.log('🎉 PWA: App installed successfully!');
        isInstalled = true;
        hideInstallButton();
        
        // Track installation
        trackEvent('pwa_installed');
    }

    function registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('✅ Service Worker: Registered successfully', registration);
                    
                    // Check for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                showUpdateNotification();
                            }
                        });
                    });
                })
                .catch(error => {
                    console.error('❌ Service Worker: Registration failed', error);
                });
        }
    }

    function setupInstallButton() {
        // Create install button if not exists
        if (!document.getElementById('pwa-install-btn')) {
            const installBtn = document.createElement('button');
            installBtn.id = 'pwa-install-btn';
            installBtn.className = 'pwa-install-btn';
            installBtn.innerHTML = `
                <i class="fas fa-download"></i>
                <span data-translate="pwa.install">Instalar App</span>
            `;
            installBtn.style.display = 'none';
            
            document.body.appendChild(installBtn);
            
            // Add click handler
            installBtn.addEventListener('click', installApp);
        }
    }

    function showInstallButton() {
        const installBtn = document.getElementById('pwa-install-btn');
        if (installBtn && !isInstalled) {
            installBtn.style.display = 'flex';
            installBtn.style.animation = 'slideInUp 0.5s ease-out';
        }
    }

    function hideInstallButton() {
        const installBtn = document.getElementById('pwa-install-btn');
        if (installBtn) {
            installBtn.style.animation = 'slideOutDown 0.5s ease-out';
            setTimeout(() => {
                installBtn.style.display = 'none';
            }, 500);
        }
    }

    async function installApp() {
        if (!deferredPrompt) {
            console.log('❌ PWA: Install prompt not available');
            return;
        }

        try {
            // Show install prompt
            deferredPrompt.prompt();
            
            // Wait for user response
            const { outcome } = await deferredPrompt.userChoice;
            
            if (outcome === 'accepted') {
                console.log('✅ PWA: User accepted install prompt');
                trackEvent('pwa_install_accepted');
            } else {
                console.log('❌ PWA: User dismissed install prompt');
                trackEvent('pwa_install_dismissed');
            }
            
            // Clear the prompt
            deferredPrompt = null;
            hideInstallButton();
            
        } catch (error) {
            console.error('❌ PWA: Install failed', error);
        }
    }

    function showUpdateNotification() {
        // Create update notification
        const updateNotification = document.createElement('div');
        updateNotification.className = 'pwa-update-notification';
        updateNotification.innerHTML = `
            <div class="update-content">
                <i class="fas fa-sync-alt"></i>
                <span data-translate="pwa.update">Nova versão disponível!</span>
                <button onclick="updateApp()" data-translate="pwa.update_button">Atualizar</button>
            </div>
        `;
        
        document.body.appendChild(updateNotification);
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            if (updateNotification.parentNode) {
                updateNotification.remove();
            }
        }, 10000);
    }

    // ===========================
    // PWA Features
    // ===========================

    function setupOfflineSupport() {
        // Show offline indicator
        window.addEventListener('online', () => {
            hideOfflineIndicator();
        });
        
        window.addEventListener('offline', () => {
            showOfflineIndicator();
        });
    }

    function showOfflineIndicator() {
        const offlineIndicator = document.createElement('div');
        offlineIndicator.id = 'offline-indicator';
        offlineIndicator.className = 'offline-indicator';
        offlineIndicator.innerHTML = `
            <i class="fas fa-wifi"></i>
            <span data-translate="pwa.offline">Você está offline</span>
        `;
        
        document.body.appendChild(offlineIndicator);
    }

    function hideOfflineIndicator() {
        const offlineIndicator = document.getElementById('offline-indicator');
        if (offlineIndicator) {
            offlineIndicator.remove();
        }
    }

    function setupPushNotifications() {
        if ('Notification' in window && 'serviceWorker' in navigator) {
            // Request permission
            if (Notification.permission === 'default') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        console.log('✅ PWA: Push notifications enabled');
                        trackEvent('pwa_notifications_enabled');
                    }
                });
            }
        }
    }

    // ===========================
    // Analytics Integration
    // ===========================

    function trackEvent(eventName, parameters = {}) {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: 'PWA',
                event_label: eventName,
                ...parameters
            });
        }
        
        // Console log for debugging
        console.log('📊 Analytics:', eventName, parameters);
    }

    function trackPageView() {
        if (typeof gtag !== 'undefined') {
            gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href
            });
        }
    }

    // ===========================
    // PWA Utilities
    // ===========================

    function updateApp() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistration().then(registration => {
                if (registration && registration.waiting) {
                    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                    window.location.reload();
                }
            });
        }
    }

    function getPWAStatus() {
        return {
            isInstalled: isInstalled,
            isOnline: navigator.onLine,
            hasServiceWorker: 'serviceWorker' in navigator,
            canInstall: !!deferredPrompt
        };
    }

    // ===========================
    // Initialize PWA
    // ===========================

    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initPWA);
        } else {
            initPWA();
        }
        
        // Setup additional features
        setupOfflineSupport();
        setupPushNotifications();
        
        // Track page view
        trackPageView();
    }

    // Start PWA manager
    init();

    // Expose functions globally
    window.LumenPWA = {
        installApp,
        updateApp,
        getPWAStatus,
        trackEvent
    };

    // Make updateApp available globally
    window.updateApp = updateApp;

})();

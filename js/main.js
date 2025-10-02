// ===========================
// Main JavaScript
// ===========================

(function() {
    'use strict';

    // State
    let currentLang = 'pt';
    let portfolioItems = [];
    let currentModalIndex = 0;
    let currentTheme = 'dark';
    
    // Language data
    const languageData = {
        pt: { flag: '🇧🇷', name: 'Português', code: 'PT' },
        en: { flag: '🇺🇸', name: 'English', code: 'EN' },
        de: { flag: '🇩🇪', name: 'Deutsch', code: 'DE' },
        es: { flag: '🇪🇸', name: 'Español', code: 'ES' }
    };

    // ===========================
    // Translation System
    // ===========================

    function changeLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = getTranslation(lang, key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Update dropdown display
        const langInfo = languageData[lang];
        if (langInfo) {
            const currentFlag = document.getElementById('currentFlag');
            const currentLangCode = document.getElementById('currentLang');
            
            if (currentFlag) currentFlag.textContent = langInfo.flag;
            if (currentLangCode) currentLangCode.textContent = langInfo.code;
        }

        // Update active language option
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            }
        });

        // Close dropdown
        const selector = document.querySelector('.language-selector');
        if (selector) selector.classList.remove('active');

        // Save preference
        localStorage.setItem('preferred-language', lang);
    }

    // Initialize language
    function initLanguage() {
        const savedLang = localStorage.getItem('preferred-language');
        const browserLang = navigator.language.split('-')[0];
        const supportedLangs = ['pt', 'en', 'de', 'es'];
        
        let initialLang = 'pt';
        if (savedLang && supportedLangs.includes(savedLang)) {
            initialLang = savedLang;
        } else if (supportedLangs.includes(browserLang)) {
            initialLang = browserLang;
        }
        
        changeLanguage(initialLang);
    }

    // ===========================
    // Navigation
    // ===========================

    function initNavigation() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        // Mobile menu toggle
        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }

        // Close mobile menu on link click
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle?.classList.remove('active');
                navMenu?.classList.remove('active');
            });
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 80;
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Active nav on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-menu a').forEach(link => {
                        link.classList.remove('active');
                    });
                    navLink?.classList.add('active');
                }
            });

            // Navbar background on scroll
            const navbar = document.querySelector('.navbar');
            if (scrollY > 50) {
                navbar.style.background = 'rgba(26, 29, 41, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(26, 29, 41, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // ===========================
    // Portfolio System
    // ===========================

    async function loadPortfolioData() {
        // Try to load from JSON file first
        try {
            const response = await fetch('data/portfolio.json');
            if (response.ok) {
                const data = await response.json();
                portfolioItems = data.items || [];
                console.log('✓ Portfolio loaded from JSON');
            } else {
                throw new Error('Could not load portfolio.json');
            }
        } catch (error) {
            console.log('⚠ Loading default portfolio items');
            // Fallback to default items if JSON file is not available
            portfolioItems = [
                {
                    id: 1,
                    titleKey: 'portfolio.anterior.title',
                    descriptionKey: 'portfolio.anterior.description',
                    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
                    category: 'anterior'
                },
                {
                    id: 2,
                    titleKey: 'portfolio.bridges.title',
                    descriptionKey: 'portfolio.bridges.description',
                    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop',
                    category: 'bridges'
                },
                {
                    id: 3,
                    titleKey: 'portfolio.posterior.title',
                    descriptionKey: 'portfolio.posterior.description',
                    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop',
                    category: 'posterior'
                },
                {
                    id: 4,
                    titleKey: 'portfolio.implants.title',
                    descriptionKey: 'portfolio.implants.description',
                    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&h=600&fit=crop',
                    category: 'implants'
                },
                {
                    id: 5,
                    titleKey: 'portfolio.full.title',
                    descriptionKey: 'portfolio.full.description',
                    image: 'https://images.unsplash.com/photo-1609840112855-9ab5f840f525?w=800&h=600&fit=crop',
                    category: 'full'
                }
            ];
        }

        renderPortfolio();
    }

    function renderPortfolio() {
        const grid = document.getElementById('portfolioGrid');
        if (!grid) return;

        grid.innerHTML = '';

        portfolioItems.forEach((item, index) => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item fade-in';
            portfolioItem.setAttribute('data-index', index);
            
            portfolioItem.innerHTML = `
                <img class="portfolio-image" src="${item.image}" alt="${getTranslation(currentLang, item.titleKey)}" loading="lazy">
                <div class="portfolio-info">
                    <h3 data-translate="${item.titleKey}">${getTranslation(currentLang, item.titleKey)}</h3>
                    <p data-translate="${item.descriptionKey}">${getTranslation(currentLang, item.descriptionKey)}</p>
                </div>
            `;

            portfolioItem.addEventListener('click', () => openModal(index));
            grid.appendChild(portfolioItem);
        });

        // Trigger animations
        setTimeout(() => observeElements(), 100);
    }

    // ===========================
    // Modal System
    // ===========================

    function openModal(index) {
        currentModalIndex = index;
        const modal = document.getElementById('portfolioModal');
        const item = portfolioItems[index];
        
        if (!modal || !item) return;

        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');

        modalImage.src = item.image;
        modalTitle.textContent = getTranslation(currentLang, item.titleKey);
        modalDescription.textContent = getTranslation(currentLang, item.descriptionKey);

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        const modal = document.getElementById('portfolioModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    function navigateModal(direction) {
        currentModalIndex += direction;
        
        if (currentModalIndex < 0) {
            currentModalIndex = portfolioItems.length - 1;
        } else if (currentModalIndex >= portfolioItems.length) {
            currentModalIndex = 0;
        }
        
        openModal(currentModalIndex);
    }

    function initModal() {
        const modal = document.getElementById('portfolioModal');
        const closeBtn = document.querySelector('.modal-close');
        const prevBtn = document.querySelector('.modal-prev');
        const nextBtn = document.querySelector('.modal-next');

        // Close modal
        closeBtn?.addEventListener('click', closeModal);
        modal?.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Navigation
        prevBtn?.addEventListener('click', () => navigateModal(-1));
        nextBtn?.addEventListener('click', () => navigateModal(1));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!modal?.classList.contains('active')) return;
            
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') navigateModal(-1);
            if (e.key === 'ArrowRight') navigateModal(1);
        });
    }

    // ===========================
    // Animations on Scroll
    // ===========================

    function observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Add fade-in class to cards
        document.querySelectorAll('.service-card, .guarantee-card, .workflow-step').forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }

    // ===========================
    // Language Selector
    // ===========================

    function initLanguageSelector() {
        const dropdown = document.querySelector('.language-selector');
        const toggle = document.querySelector('.lang-dropdown-toggle');
        const options = document.querySelectorAll('.lang-option');

        // Toggle dropdown
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown?.classList.toggle('active');
            });
        }

        // Select language
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.getAttribute('data-lang');
                changeLanguage(lang);
                renderPortfolio(); // Re-render portfolio with new language
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (dropdown && !dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Close dropdown on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && dropdown?.classList.contains('active')) {
                dropdown.classList.remove('active');
            }
        });
    }

    // ===========================
    // Loading Screen
    // ===========================

    function initLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        
        // Hide loading screen after page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                if (loadingScreen) {
                    loadingScreen.classList.add('hidden');
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                    }, 500);
                }
            }, 1500); // Show loading for at least 1.5 seconds
        });
    }

    // ===========================
    // Theme Toggle
    // ===========================

    function initThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        
        // Load saved theme
        const savedTheme = localStorage.getItem('preferred-theme');
        if (savedTheme) {
            currentTheme = savedTheme;
            applyTheme(currentTheme);
        }

        // Theme toggle event
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
                applyTheme(currentTheme);
                localStorage.setItem('preferred-theme', currentTheme);
            });
        }
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const themeIcon = document.getElementById('themeIcon');
        
        if (themeIcon) {
            if (theme === 'dark') {
                themeIcon.className = 'fas fa-moon';
            } else {
                themeIcon.className = 'fas fa-sun';
            }
        }
    }

    // ===========================
    // Smooth Loading
    // ===========================

    function initSmoothLoading() {
        // Body opacity is handled by loading screen
        document.body.style.opacity = '1';
    }

    // ===========================
    // Contact Form (if you add one later)
    // ===========================

    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Here you would send the data to your backend
            console.log('Form data:', data);
            
            // Show success message
            alert(getTranslation(currentLang, 'form.success'));
            form.reset();
        });
    }

    // ===========================
    // Performance Optimization
    // ===========================

    function lazyLoadImages() {
        if ('loading' in HTMLImageElement.prototype) {
            // Browser supports lazy loading
            document.querySelectorAll('img[loading="lazy"]').forEach(img => {
                img.src = img.dataset.src || img.src;
            });
        } else {
            // Fallback for browsers that don't support lazy loading
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
            document.body.appendChild(script);
        }
    }

    // ===========================
    // Initialize Everything
    // ===========================

    async function init() {
        console.log('🦷 Lumen CAD Design - Initializing...');
        
        initLanguage();
        initThemeToggle();
        initLoadingScreen();
        initNavigation();
        initLanguageSelector();
        await loadPortfolioData();
        initModal();
        observeElements();
        initContactForm();
        lazyLoadImages();
        initSmoothLoading();

        console.log('✅ Lumen CAD Design - Ready!');
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose functions for debugging (optional)
    window.LumenCAD = {
        changeLanguage,
        openModal,
        closeModal,
        applyTheme,
        portfolioItems
    };

})();


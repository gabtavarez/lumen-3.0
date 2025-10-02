// Service Worker para PWA
const CACHE_NAME = 'lumen-cad-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/main.js',
  '/js/translations.js',
  '/js/pwa.js',
  '/data/portfolio.json',
  'https://i.ibb.co/wFcFY77d/Ativo-1.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: Installed successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Install failed', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip external requests (analytics, etc.)
  if (!event.request.url.startsWith(self.location.origin) && 
      !event.request.url.includes('cdnjs.cloudflare.com') &&
      !event.request.url.includes('i.ibb.co')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          console.log('Service Worker: Serving from cache', event.request.url);
          return response;
        }

        console.log('Service Worker: Fetching from network', event.request.url);
        return fetch(event.request)
          .then(response => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache the fetched response
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(error => {
            console.error('Service Worker: Fetch failed', error);
            // Return offline page for navigation requests
            if (event.request.destination === 'document') {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', event => {
  if (event.tag === 'whatsapp-message') {
    event.waitUntil(syncWhatsAppMessages());
  }
});

// Push notifications
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Nova mensagem do Lumen CAD Design',
    icon: 'https://i.ibb.co/wFcFY77d/Ativo-1.png',
    badge: 'https://i.ibb.co/wFcFY77d/Ativo-1.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'open',
        title: 'Abrir',
        icon: 'https://i.ibb.co/wFcFY77d/Ativo-1.png'
      },
      {
        action: 'close',
        title: 'Fechar',
        icon: 'https://i.ibb.co/wFcFY77d/Ativo-1.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Lumen CAD Design', options)
  );
});

// Notification click
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper function for background sync
function syncWhatsAppMessages() {
  // Implement offline message queuing here
  console.log('Service Worker: Syncing WhatsApp messages');
  return Promise.resolve();
}

// Message handling
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

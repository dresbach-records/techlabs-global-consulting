
const CACHE_NAME = 'techlabs-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Instalação e Cache Inicial
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Ignora erros de cache para assets individuais para não travar a instalação
      return Promise.allSettled(ASSETS.map(url => cache.add(url)));
    })
  );
  self.skipWaiting();
});

// Ativação e Limpeza de Caches Antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// Estratégia Stale-While-Revalidate
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('./index.html');
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});

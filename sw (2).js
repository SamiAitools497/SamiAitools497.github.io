/* Sami AI Tools — service worker (sirf installability ke liye; koi caching nahi, site hamesha live rehti hai) */
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  e.respondWith(fetch(e.request));
});

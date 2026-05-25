// Minimal service worker — makes the site PWA-installable
// No offline caching since data lives in Gist and needs to be live

const VERSION = 'v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});

// Pass all requests straight through — no caching
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});

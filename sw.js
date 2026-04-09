const CACHE_NAME = 'campo-v1';
const MAP_CACHE = 'campo-tiles-v1';

const APP_ASSETS = [
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js',
  'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME && k !== MAP_CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.hostname.includes('basemaps.cartocdn.com') || url.hostname.includes('tile.openstreetmap.org')) {
    event.respondWith(
      caches.open(MAP_CACHE).then(cache =>
        cache.match(event.request).then(cached => cached || fetch(event.request).then(res => { if (res.ok) cache.put(event.request, res.clone()); return res; }))
      )
    );
    return;
  }
  if (APP_ASSETS.some(asset => event.request.url.includes(asset)) || event.request.url.includes('index.html')) {
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request).then(res => { caches.open(CACHE_NAME).then(c => c.put(event.request, res.clone())); return res; }))
    );
    return;
  }
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
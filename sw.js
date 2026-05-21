const CACHE_NAME = 'ielts-master-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://cdn-icons-png.flaticon.com/512/2232/2232688.png'
];

// تثبيت التطبيق وتخزين الملفات
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// تشغيل التطبيق وجلب الملفات من الذاكرة المحلية
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
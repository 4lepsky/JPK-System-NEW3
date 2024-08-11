// service-worker.js
self.addEventListener('install', function(event) {
    console.log('Service Worker installing.');
    // You can cache assets here if needed
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker activating.');
});

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // O Chrome exige que o evento fetch seja ouvido para validar o PWA
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response("Offline");
        })
    );
});

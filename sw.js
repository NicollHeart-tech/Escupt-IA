self.addEventListener('install', (e) => {
  console.log('SW instalado');
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Isso é o que o Chrome precisa para ativar o botão de instalar
  event.respondWith(fetch(event.request));
});

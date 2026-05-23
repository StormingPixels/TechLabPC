self.addEventListener('install', (event) => {
  console.log('Service Worker geïnstalleerd');
});

self.addEventListener('fetch', (event) => {
  // Nodig om aan PWA-eisen te voldoen
});
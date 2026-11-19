// SISTEMA K9 — service worker da "casca" instalável.
// Guarda só a casca (esta página, ícones e manifesto). Os dados do sistema NUNCA ficam no aparelho:
// eles continuam no Google (Apps Script), e sem internet a casca mostra o aviso de "sem conexão".
const VERSAO = 'k9-casca-v2';
const ARQUIVOS = ['./', './index.html', './manifest.webmanifest', './icones/icone-192.png', './icones/icone-512.png',
  './icones/icone-maskable-512.png', './icones/apple-touch-icon.png', './icones/favicon-64.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSAO).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSAO).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return; // o sistema (Google) não passa por aqui
  // internet primeiro (pega atualizações da casca); sem internet, usa a cópia guardada
  e.respondWith(fetch(e.request).then((r) => {
    const copia = r.clone(); caches.open(VERSAO).then((c) => c.put(e.request, copia)); return r;
  }).catch(() => caches.match(e.request).then((r) => r || caches.match('./index.html'))));
});

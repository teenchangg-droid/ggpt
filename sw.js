const V='ox-gen-v9';
const FILES=['./','./index.html','./bg-green.png','./bg-sakura.png','./manifest.webmanifest','./icon-192.png','./icon-512.png','./fonts/NotoSerifKR-Regular.woff','./fonts/NotoSerifKR-Bold.woff'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});

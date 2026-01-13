self.addEventListener("fetch", event => {
    const url = event.request.url;

    // Si la request es a la API, NO la cacheamos
    if (url.includes("pino-negro-app.onrender.com")) {
        event.respondWith(fetch(event.request)); // <-- ESTA ES LA CLAVE
        return;
    }

    // Para todo lo demás, usar cache
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
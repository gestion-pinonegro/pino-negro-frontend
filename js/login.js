const API = "https://pino-negro-api-1.onrender.com";

// Escuchar el submit del formulario
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    login();
});

async function login() {
    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("mensaje"); // ← CORREGIDO

    error.textContent = "";

    if (!usuario || !password) {
        error.textContent = "Completa todos los campos";
        return;
    }

    try {
        const res = await fetch(API + "/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ usuario, password })
        });

        const data = await res.json();

        if (res.status !== 200) {
            error.textContent = data.detail || "Credenciales incorrectas";
            return;
        }

        // Guardar sesión
        localStorage.setItem("logueado", "true");

        // Redirigir al ERP
        window.location.href = "/index.html";

    } catch (e) {
        error.textContent = "Error de conexión con el servidor";
    }
}
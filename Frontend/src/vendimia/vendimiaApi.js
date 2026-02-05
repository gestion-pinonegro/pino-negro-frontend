const API = "https://pino-negro-api.onrender.com"; // o localhost

export async function crearIngreso(data) {
  const res = await fetch(`${API}/vendimia/ingresos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function listarIngresos() {
  const res = await fetch(`${API}/vendimia/ingresos`);
  return res.json();
}

export async function registrarMuestra(data) {
  const res = await fetch(`${API}/vendimia/muestras`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function listarMuestras(ingresoId) {
  const res = await fetch(`${API}/vendimia/muestras/${ingresoId}`);
  return res.json();
}

export async function asignarDestino(data) {
  const res = await fetch(`${API}/vendimia/destino`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function dashboardVendimia() {
  const res = await fetch(`${API}/vendimia/dashboard`);
  return res.json();
}
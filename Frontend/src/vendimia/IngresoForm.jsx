import { useState } from "react";
import { crearIngreso } from "./vendimiaApi";

export default function IngresoForm() {
  const [form, setForm] = useState({
    fecha_ingreso: "",
    productor: "",
    finca: "",
    cuartel: "",
    variedad: "",
    peso_bruto: "",
    tara: "",
    observaciones: "",
    usuario_registro: "franco"
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await crearIngreso(form);
    alert("Ingreso registrado ID: " + res.id);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ingreso de Vendimia</h2>

      <input name="fecha_ingreso" type="datetime-local" onChange={handleChange} />
      <input name="productor" placeholder="Productor" onChange={handleChange} />
      <input name="finca" placeholder="Finca" onChange={handleChange} />
      <input name="cuartel" placeholder="Cuartel" onChange={handleChange} />
      <input name="variedad" placeholder="Variedad" onChange={handleChange} />
      <input name="peso_bruto" type="number" placeholder="Peso bruto" onChange={handleChange} />
      <input name="tara" type="number" placeholder="Tara" onChange={handleChange} />
      <textarea name="observaciones" placeholder="Observaciones" onChange={handleChange} />

      <button type="submit">Registrar</button>
    </form>
  );
}
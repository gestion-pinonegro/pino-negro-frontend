import { useState } from "react";
import { registrarMuestra } from "./vendimiaApi";

export default function MuestrasForm({ ingresoId }) {
  const [form, setForm] = useState({
    ingreso_id: ingresoId,
    brix: "",
    ph: "",
    acidez_total: "",
    temperatura: "",
    peso_racimo: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await registrarMuestra(form);
    alert("Muestra registrada ID: " + res.id);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Registrar Muestra</h3>

      <input name="brix" placeholder="Brix" onChange={handleChange} />
      <input name="ph" placeholder="pH" onChange={handleChange} />
      <input name="acidez_total" placeholder="AT" onChange={handleChange} />
      <input name="temperatura" placeholder="Temperatura" onChange={handleChange} />
      <input name="peso_racimo" placeholder="Peso racimo" onChange={handleChange} />

      <button type="submit">Guardar</button>
    </form>
  );
}
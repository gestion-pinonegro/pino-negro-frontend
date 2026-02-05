import { useState } from "react";
import { asignarDestino } from "./vendimiaApi";

export default function DestinoForm({ ingresoId }) {
  const [form, setForm] = useState({
    ingreso_id: ingresoId,
    tipo_destino: "",
    destino: "",
    usuario_asigna: "franco"
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await asignarDestino(form);
    alert("Destino asignado ID: " + res.id);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Asignar Destino</h3>

      <select name="tipo_destino" onChange={handleChange}>
        <option value="">Seleccionar</option>
        <option value="pileta">Pileta</option>
        <option value="prensa">Prensa</option>
        <option value="tolva">Tolva</option>
      </select>

      <input name="destino" placeholder="Ej: Pileta 12" onChange={handleChange} />

      <button type="submit">Asignar</button>
    </form>
  );
}
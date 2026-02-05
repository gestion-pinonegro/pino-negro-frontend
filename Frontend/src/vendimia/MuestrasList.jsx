import { useEffect, useState } from "react";
import { listarMuestras } from "./vendimiaApi";

export default function MuestrasList({ ingresoId }) {
  const [muestras, setMuestras] = useState([]);

  useEffect(() => {
    listarMuestras(ingresoId).then(setMuestras);
  }, [ingresoId]);

  return (
    <div>
      <h3>Muestras</h3>
      <ul>
        {muestras.map(m => (
          <li key={m[0]}>
            Brix: {m[2]} | pH: {m[3]} | AT: {m[4]} | Temp: {m[5]} | Racimo: {m[6]}
          </li>
        ))}
      </ul>
    </div>
  );
}
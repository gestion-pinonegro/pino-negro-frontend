import { useEffect, useState } from "react";
import { dashboardVendimia } from "./vendimiaApi";

export default function DashboardVendimia() {
  const [data, setData] = useState(null);

  useEffect(() => {
    dashboardVendimia().then(setData);
  }, []);

  if (!data) return <p>Cargando dashboard...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard de Vendimia</h2>

      <div className="cards">
        <div className="card">
          <h3>Kilos Totales</h3>
          <p>{data.kilos_totales} kg</p>
        </div>

        <div className="card">
          <h3>Muestras Tomadas</h3>
          <p>{data.cantidad_muestras}</p>
        </div>

        <div className="card">
          <h3>Destinos</h3>
          <ul>
            {data.destinos.map(([tipo, cantidad]) => (
              <li key={tipo}>{tipo}: {cantidad}</li>
            ))}
          </ul>
        </div>
      </div>

      <h3>Kilos por Variedad</h3>
      <ul>
        {data.kilos_por_variedad.map(([variedad, kilos]) => (
          <li key={variedad}>{variedad}: {kilos} kg</li>
        ))}
      </ul>

      <h3>Kilos por Productor</h3>
      <ul>
        {data.kilos_por_productor.map(([prod, kilos]) => (
          <li key={prod}>{prod}: {kilos} kg</li>
        ))}
      </ul>

      <h3>Ingresos por Día</h3>
      <ul>
        {data.ingresos_por_dia.map(([fecha, kilos]) => (
          <li key={fecha}>{fecha}: {kilos} kg</li>
        ))}
      </ul>
    </div>
  );
}
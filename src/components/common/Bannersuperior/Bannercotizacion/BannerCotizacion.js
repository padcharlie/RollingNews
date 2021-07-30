import React, { Fragment, useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

export default function BannerCotizacion() {
  const [dolar, setDolar] = useState([]);
  const [cargando, setCargando] = useState(false);
  const consultarAPICoti = async () => {
    try {
      setCargando(true);
      const respuesta = await fetch(
        "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
      );
      const cotizaciones = await respuesta.json();
      setDolar(cotizaciones);
      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarComponente =
    cargando === true ? (
      <Spinner animation="border" size="sm"></Spinner>
    ) : (
      <div>
        Dólar Oficial <b>{dolar[0]?.casa.compra}</b> - Dólar Blue{" "}
        <b>{dolar[1]?.casa.compra}</b>
      </div>
    );

  useEffect(() => {
    consultarAPICoti();
  }, []);

  return (<Fragment>{mostrarComponente}</Fragment>);
}

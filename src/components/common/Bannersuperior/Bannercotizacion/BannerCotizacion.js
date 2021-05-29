import React, { useState, useEffect } from "react";
import { Spinner } from 'react-bootstrap';
import InfoCoti from "./InfoCoti";


export default function BannerCotizacion() {
  const [dolar, setDolar] = useState([]);
  const [cargando, setCargando] = useState(false);
  const consultarAPICoti = async () => {
    try{ 
      setCargando(true);
    const respuesta = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    const cotizaciones = await respuesta.json()
   setDolar(cotizaciones)
   setCargando(false);
  }catch (error){
    console.log(error)
  }
    }
   
    console.log()

  useEffect(() => {
    consultarAPICoti();
  }, []);

  const mostrarComponente = (cargando === true )? (<Spinner animation="border" size="sm"></Spinner>) : (dolar && <InfoCoti dolar={dolar}></InfoCoti>);
  return (
    <div>
      {mostrarComponente}
      
    </div>
  );
}

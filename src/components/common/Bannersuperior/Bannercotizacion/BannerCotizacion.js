import React, { useState, useEffect } from "react";

export default function BannerCotizacion() {
  const [dolar, setDolar] = useState([]);
  const [cargando, setCargando] = useState(false);
  const consultarAPICoti = async () => {
    try{ 
      setCargando(true);
    const respuesta = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    const cotizaciones = await respuesta.json()
   setDolar(cotizaciones)
   console.log("dolar",cotizaciones)
   setCargando(false);
  }catch (error){
    console.log(error)
  }
    }
   
    console.log()

  useEffect(() => {
    consultarAPICoti();
  }, []);

  return (
    <div>
    </div>
  );
}

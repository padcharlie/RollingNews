import React, { useState , useEffect} from "react";

export default function BannerCotizacion() {
  const [dolar,setDolar]=useState({})
  const consultarAPICoti = async () => {
    const respuesta = await fetch("http://ws.geeklab.com.ar/dolar/get-dolar-json.php");
   setDolar(await respuesta.json());
    console.log("cotiz",dolar);
  };

  useEffect(() => {
    consultarAPICoti()
  }, [])
  return(<div>
    <b>Dolar:{" "}</b>Oficial: {dolar.libre}{" "} Blue: {dolar.blue}
  </div>
     ) ;
}

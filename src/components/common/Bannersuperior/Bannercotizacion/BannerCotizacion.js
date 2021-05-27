import React from "react";

export default function BannerCotizacion() {
  const consultarAPICoti = async () => {
    const respuesta = await fetch("https://api.estadisticasbcra.com/usd", {
      mode: "no-cors",
      headers: {
        Authorization:
          "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTM2Njc3NzEsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJjYXBhZHVsYXZAZ21haWwuY29tIn0.MX4vQJIgfK7m9vPazg7sNNPeVa3EtrHlupktTXcV_D6T1AXcXPElcXvTEYZzWDccmrrFM4GD9z6It06ivZmU7g",
      },
    });
    const resp = await respuesta;
    console.log("cotiz", resp);
  };

  consultarAPICoti();
  return <div></div>;
}

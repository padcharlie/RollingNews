import React from "react";
import { getIcon } from "./climaEmojis";
import "./bannerClima.css";

const Datosclima = (props) => {

  return (
    <div>
      <p>
        <svg
          id="climasvg"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -4 50 50"
          width="2em"
          height="2em"
        >
          {" "}
          <path d={getIcon(props.clima.current.weather[0].icon)} />
        </svg>{" "}
        <b>{props.clima.current.temp}ºC</b>, San Miguel de Tucumán.
      </p>
    </div>
  );
};

export default Datosclima;

import React from 'react';
import { getIcon } from './climaEmojis';

const Datosclima = (props) => {
console.log(props, 'desde datosclima');

    return (
        <div>            
        <p>{getIcon(props.clima.current.weather[0].icon)}<b>{props.clima.current.temp}ºC</b>, San Miguel de Tucumán.</p>            
    </div>
    );
};

export default Datosclima;
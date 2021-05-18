import React from 'react';

const Datosclima = (props) => {
    return (
        <div className=''>
        <p className=''> ☀ <b> {props.clima.current.temp}ºC</b>, San Miguel de Tucumán.
</p>            
    </div>
    );
};

export default Datosclima;
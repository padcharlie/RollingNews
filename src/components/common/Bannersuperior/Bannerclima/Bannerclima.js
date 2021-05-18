import React, { Fragment, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Datosclima from './Datosclima';

const Bannerclima = () => {
    const [clima, setClima] = useState({});
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        consultarApi();
    },[]);

    const consultarApi = async() => {

        try{
            setCargando(true);
            const respuesta = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=-26.8241&lon=-65.2226&lang=es&units=metric&exclude=minutely,hourly,alerts&appid=c5bf7ca13f58d364dd6c6036292cbd2d');
            const resultado = await respuesta.json();
            console.log(resultado);
            setClima(resultado);
            setCargando(false);
        }catch(error){
            console.log(error);
        };
    
    };

    const mostrarComponente = (cargando === true )? (<Spinner animation="border" size="sm"></Spinner>) : (clima.current && <Datosclima clima={clima}></Datosclima>);


    return (
        <Fragment>
            {mostrarComponente}
        </Fragment>
    );
};

export default Bannerclima;
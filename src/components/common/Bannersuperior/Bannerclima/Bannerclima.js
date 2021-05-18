import React, { Fragment, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Datosclima from './Datosclima';

//coordenadas san miguel de tucuman lat -26.8328417,-65.2926342 long
//api open weather api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
//api key c5bf7ca13f58d364dd6c6036292cbd2d
//san miguel https://api.openweathermap.org/data/2.5/forecast?lat=-26.8328417&lon=-65.2926342&appid=c5bf7ca13f58d364dd6c6036292cbd2d
// id de open weather para tucuman 3836873

// lat=-26.8241&lon=-65.2226

// api call current posta https://api.openweathermap.org/data/2.5/weather?id=3836873&lang=es&units=metric&appid=c5bf7ca13f58d364dd6c6036292cbd2d
//call a usar, actual + forecast   https://api.openweathermap.org/data/2.5/onecall?lat=-26.8241&lon=-65.2226&lang=es&units=metric&exclude=minutely,hourly,alerts&appid=c5bf7ca13f58d364dd6c6036292cbd2d


//Aqui van los states que vayas a usar





const Bannerclima = () => {
    const [clima, setClima] = useState({});
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        consultarApi();
    },[]);

    const consultarApi = async() => {

        setCargando(true);
        const respuesta = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=-26.8241&lon=-65.2226&lang=es&units=metric&exclude=minutely,hourly,alerts&appid=c5bf7ca13f58d364dd6c6036292cbd2d');
        const resultado = await respuesta.json();
        console.log(resultado);
        setClima(resultado);
        setCargando(false);
    };

    const mostrarComponente = (cargando === true)? (<Spinner></Spinner>) : (<Datosclima clima={clima}></Datosclima>);

    return (
        <Fragment>
            {mostrarComponente}
        </Fragment>
    );
};

export default Bannerclima;
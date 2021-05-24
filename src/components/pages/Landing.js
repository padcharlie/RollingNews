import {Fragment} from 'react'
import Bannersuperior from '../common/Bannersuperior/Bannerclima/Bannersuperior';
import Carrusel from "../Carrusel"

export default function Landing(props) {
    return (
    <Fragment>
    <Bannersuperior/>
    <Carrusel  news={props.news}/>
    <container className="d-flex w-75 my-2 mx-auto" >
    <img className="img-fluid"  src={process.env.PUBLIC_URL + "/images/covid1.png"} alt="Quédese en casa. Rolling news le da las noticias" />
    </container>
    <container className="d-flex w-75 my-2 mx-auto" >
    <img className="img-fluid"  src={process.env.PUBLIC_URL + "/images/covid2.png"} alt="Lávese las manos con frecuencia y use barbijo. Rolling news le da las noticias" />
    </container><container className="d-flex w-75 my-2 mx-auto" >
    <img className="img-fluid"  src={process.env.PUBLIC_URL + "/images/covid3.png"} alt="Mantenga la distancia social. Rolling news le da las noticias" />
    </container>
    </Fragment>
    )
}

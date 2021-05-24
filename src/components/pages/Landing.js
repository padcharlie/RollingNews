import {Fragment} from 'react'
import Bannersuperior from '../common/Bannersuperior/Bannerclima/Bannersuperior';
import Carrusel from "../Carrusel"

export default function Landing(props) {
    return (
    <Fragment>
    <Bannersuperior/>
    <Carrusel  news={props.news}/>
    <container className="d-flex my-2 justify-content-center" >
    <img className="my-2 mx-auto"  src={process.env.PUBLIC_URL + "/images/covid1.png"} alt="Quédese en casa. Rolling news le da las noticias" />
    </container>
    <container className="d-flex my-2 justify-content-center" >
    <img className="my-2 mx-auto"  src={process.env.PUBLIC_URL + "/images/covid2.png"} alt="Quédese en casa. Rolling news le da las noticias" />
    </container><container className="d-flex my-2 justify-content-center" >
    <img className="my-2 mx-auto"  src={process.env.PUBLIC_URL + "/images/covid3.png"} alt="Quédese en casa. Rolling news le da las noticias" />
    </container>
    </Fragment>
    )
}

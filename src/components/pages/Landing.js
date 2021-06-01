import {Fragment} from 'react'
import Bannersuperior from '../common/Bannersuperior/Bannerclima/Bannersuperior';
import Carrusel from "../Carrusel"
import { Container } from 'react-bootstrap';
import CarrouselSecciones from '../common/SeccionesLP/CarrouselSecciones'

export default function Landing(props) {
    return (
    <Fragment>
        {/* API Clima */}
    <Bannersuperior/>
        {/* Noticias destacadas */}
    <Carrusel  news={props.news}/>
        {/* Banner COVID */}
    <Container className="d-flex w-75 my-2 mx-auto" >
    <img className="img-fluid"  src={process.env.PUBLIC_URL + "/images/covid1.png"} alt="Quédese en casa. Rolling news le da las noticias" />
    </Container>
        {/* Noticias por categorias */}
    <Container className="d-flex w-75 my-2 mx-auto" >
        <CarrouselSecciones news={props.news} categoria='Pruebas'></CarrouselSecciones>
    </Container>
    <Container className="d-flex w-75 my-2 mx-auto" >
    <img className="img-fluid"  src={process.env.PUBLIC_URL + "/images/covid2.png"} alt="Lávese las manos con frecuencia y use barbijo. Rolling news le da las noticias" />
    </Container>
    <Container className="d-flex w-75 my-2 mx-auto" >
    <img className="img-fluid"  src={process.env.PUBLIC_URL + "/images/covid3.png"} alt="Mantenga la distancia social. Rolling news le da las noticias" />
    </Container>
    </Fragment>
    )
}

import {Fragment} from 'react'
import Bannersuperior from '../common/Bannersuperior/Bannerclima/Bannersuperior';
import Carrusel from "../Carrusel"
import { Carousel, Container } from 'react-bootstrap';
import CarrouselSecciones from '../common/SeccionesLP/CarrouselSecciones'

export default function Landing(props) {
    return (
    <Fragment>
        
        <div className="fondo-banner pt-2">
    <Bannersuperior />
    </div>
    <Carrusel  news={props.news}/>
<Carousel>
    <Carousel.Item>
        <img src={process.env.PUBLIC_URL + "/images/covid1.png"} alt="Quédese en casa. Rolling news le da las noticias" className="img-flud" />
    </Carousel.Item>
    <Carousel.Item>
        <img src={process.env.PUBLIC_URL + "/images/covid2.png"} alt="Lávese las manos con frecuencia y use barbijo. Rolling news le da las noticias" className="img-flud" />
    </Carousel.Item><Carousel.Item>
        <img src={process.env.PUBLIC_URL + "/images/covid3.png"} alt="Mantenga la distancia social. Rolling news le da las noticias" className="img-flud" />
    </Carousel.Item>
</Carousel>
    <Container className="d-flex w-75 my-2 mx-auto" >
        <CarrouselSecciones news={props.news} categoria='Pruebas'></CarrouselSecciones>
    </Container>
    <Container className="d-flex w-75 my-2 mx-auto" >
    <img className="img-fluid"  src={process.env.PUBLIC_URL + "/images/publicidad1.jpeg"} alt="Publicítese en Rolling News" />
    </Container>
    <Container className="d-flex w-75 my-2 mx-auto" >
        <CarrouselSecciones news={props.news} categoria='Actualidad'></CarrouselSecciones>
    </Container>
    <Container className="d-flex w-75 my-2 mx-auto" >
    <img className="img-fluid"  src={process.env.PUBLIC_URL + "/images/publicidad1.jpeg"} alt="Publicítese con Rolling News" />
    </Container>
    <Container className="d-flex w-75 my-2 mx-auto" >
        <CarrouselSecciones news={props.news} categoria='Deportes'></CarrouselSecciones>
    </Container>
    </Fragment>
    )
}

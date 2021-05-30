import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

export default function Carrusel(props) {
 const destacadas = props.news.filter(n => n.destacada === true)

    return (
        <Carousel className="w-75 mx-auto ">
          {destacadas.map((n)=><Carousel.Item key={n.id}>
    <img
      className="w-100"
      src={n.img}
      alt="First slide"
    />
    <Carousel.Caption>
     <Link  to={"/noticias/"+n.title} style={{ textDecoration: 'none' }}> <h4 style={{backgroundColor : "#0000007a", color: "#ffffff"}}>{n.title}</h4></Link>
    </Carousel.Caption>
  </Carousel.Item>) }
  
  </Carousel>
    )
}

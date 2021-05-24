import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Carrusel(props) {


    return (
        <Carousel className="w-75 mx-auto ">
          {props.news.map((n)=><Carousel.Item key={n.id}>
    <img
      className="w-100"
      src={n.img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{n.title}</h3>
      <p>{n.preview}</p>
    </Carousel.Caption>
  </Carousel.Item>) }
  
  </Carousel>
    )
}

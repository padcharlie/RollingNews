import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../index.css';

export default function Carrusel(props) {

  const destacada = props.news.filter((n)=>n.destacada === true)
const mostarCarousel= (destacada != []) ? (<Carousel className="w-75 mx-auto ">
{destacada.map((n)=><Carousel.Item key={n._id}>
<img
className="w-100"
src={n.img}
alt={n.imgalt}
/>
<Carousel.Caption >
<h3 className="carousel-bg">{n.title}</h3>
<p style={{ backgroundColor: "#00000067"}}>{n.preview}</p>
</Carousel.Caption>
</Carousel.Item>) }

</Carousel>) : <span>ROLLING NEWS</span>

    return (
      <div>
        {mostarCarousel}
        </div>
    )
}

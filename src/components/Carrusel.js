import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';
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
<Link to={"/noticias/"+n.title} style={{ backgroundColor: "#00000067"}}><h3 style={{color:"#FFFFFF"}}>{n.title}</h3></Link>
<p style={{ backgroundColor: "#00000067"}}>{n.preview}</p>
</Carousel.Caption>
</Carousel.Item>) }

</Carousel>) : <h1 className="text-center mt-2">ROLLING NEWS</h1>

    return (
      <div>
        {mostarCarousel}
        </div>
    )
}

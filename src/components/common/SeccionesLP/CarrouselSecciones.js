import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import '../Navegacion.css'
const CarrouselSecciones = (props) => {
  const soloTresNews= props.news.filter(n => n.category === props.categoria).slice(0,3)
  console.log("solo tres", soloTresNews)
  return (
    <div>
        <h5 className="titulo-categoria text-center p-1">{props.categoria}</h5>
      <CardColumns>
          
        {soloTresNews.filter(n => n.category === props.categoria).map((n) => (
            
                <Card className=" fondo-cards text-light text-center py-3" key={n._id}>
                <Card.Title className="fondo-cards text-light">{n.title}</Card.Title>
                <Card.Img src={n.img} alt={n.imgalt} />
                <Card.Body>
                  <Card.Text>{n.preview} </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small >{n.date}</small>
                </Card.Footer>
              </Card>
            
         
        ))}
      </CardColumns>
    </div>
  );
};

export default CarrouselSecciones;

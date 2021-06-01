import React from "react";
import { Card, CardColumns } from "react-bootstrap";

const CarrouselSecciones = (props) => {
  return (
    <div>
      <CardColumns>
        <Card bg="primary" text="white" className="text-center p-3">
          <blockquote className="blockquote mb-0 card-body">
            <h1>{props.categoria}</h1>
          </blockquote>
        </Card>
        {props.news.filter(n => n.category === props.categoria).map((n) => (
            
                <Card className="text-center py-3" key={n._id}>
                <Card.Title>{n.title}</Card.Title>
                <Card.Img src={n.img} alt={n.imgalt} />
                <Card.Body>
                  <Card.Text>{n.preview} </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{n.date}</small>
                </Card.Footer>
              </Card>
            
         
        ))}
      </CardColumns>
    </div>
  );
};

export default CarrouselSecciones;

import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../common/Navegacion.css";
const CarrouselSecciones = (props) => {
  const soloTresNews = props.news
    .filter((n) => n.category === props.categoria)
    .slice(0, 3);

  const mostrar = soloTresNews ? (
    <CardColumns>
      {" "}
      {soloTresNews
        .filter((n) => n.category === props.categoria)
        .map((n) => (
          <Card
            className=" fondo-cards text-light text-center py-3"
            key={n._id}
          >
            <Card.Title className="fondo-cards">
              <Link className="text-light" to={"/noticias/" + n.title}>
                {n.title}
              </Link>
            </Card.Title>
            <Card.Img src={n.img} alt={n.imgalt} />
            <Card.Body>
              <Link className="text-light" to={"/noticias/" + n.title}>
                <Card.Text>{n.preview} </Card.Text>
              </Link>
            </Card.Body>
            <Card.Footer>
              <small>{n.date}</small>
            </Card.Footer>
          </Card>
        ))}
    </CardColumns>
  ) : (
    <p>
      No hay noticias de {props.categoria}, disculpe si le interesaba el tema
    </p>
  );

  return (
    <div>
      <h5 className="titulo-categoria text-center p-1">{props.categoria}</h5>
      {mostrar}
    </div>
  );
};

export default CarrouselSecciones;

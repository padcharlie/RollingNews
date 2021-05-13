import React, { Fragment } from "react";
import { ListGroup } from "react-bootstrap";
import Noticias from "./Noticias";

export default function Categoria(props) {
  console.log(props.news)
  return (
    <Fragment>
      <h1>Categoria</h1>
      <ListGroup>
         {props.news.map((n) => (
          <Noticias new={n} key={n.id} />
        ))}
      </ListGroup>
    </Fragment>
  );
}

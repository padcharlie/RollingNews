import React, { Fragment } from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router";
import Noticias from "./Noticias";

export default function Categoria(props) {
  const params = useParams();
  const noticias = props.news.filter((n) => n.category === params.name);
  console.log("in this category", noticias);

const  mostrarNoticias =
    (noticias.length > 0) ? (
      noticias.map((n) => <Noticias new={n} key={n.id} />)
    ) : (
      <p>Lo sentimos, aún no tenemos nada que decir respecto a {params.name}</p>
    );

  return (
    <Fragment>
      <h1>{params.name}</h1>
      {mostrarNoticias}
    </Fragment>
  );
}

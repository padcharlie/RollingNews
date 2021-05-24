import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import Noticias from "./Noticias";

export default function AdminNoticias(props) {
const noticias = props.news
const  mostrarNoticias =
    (noticias.length > 0) ? (
      noticias.map((n) => <Noticias new={n} key={n.id} consultarNews={props.consultarNews} />)
    ) : (
      <p>¡Hora de escribir noticias!</p>
    );

  return (
    <Fragment>
      <h1 className="ml-2">Todas las noticias</h1>
      {mostrarNoticias}
    </Fragment>
  );
}
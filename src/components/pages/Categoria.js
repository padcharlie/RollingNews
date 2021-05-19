import React, { Fragment } from "react";
import { useParams } from "react-router";
import Noticias from "./Noticias";

export default function Categoria(props) {
  const params = useParams();
  const noticias = props.news.filter((n) => n.category === params.name);

const notisOrden = noticias.reverse();

const  mostrarNoticias =
    (noticias.length > 0) ? (
      notisOrden.map((n) => <Noticias new={n} key={n.id} />)
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

import React from "react";
import { useParams } from "react-router";

export default function Detalle(props) {
  const params = useParams();
  const noticia = props.news.filter((n) => n.title === params.title);

  return (
    <div className="container my-2">
      <h2>{noticia[0]?.title}</h2>
      <span>{noticia[0]?.date}</span>
      <p>{noticia[0]?.preview}</p>
      <img src={noticia[0]?.img} alt={noticia[0]?.imgalt} className="w-100 img-fluid" />
      <div>{noticia[0]?.detail}</div>
      <img src={noticia[0]?.img2} alt={noticia[0]?.imgalt2} className="img-fluid"  />
      <p>Autor:{noticia[0]?.author}</p>
    </div>
  );
}

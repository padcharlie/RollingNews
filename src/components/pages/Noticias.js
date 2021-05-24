import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Noticias(props) {
  const URLNEWS = process.env.REACT_APP_API_URL_NEWS;

  const borrarNoticia = (id) => {
    Swal.fire({
      title: "¿Quiere eliminar la noticia?",
      text: "No puede recuperar una noticia que fue eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const URL = URLNEWS + "/" + id;
          const respuesta = await fetch(URL, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (respuesta.status === 200) {
            Swal.fire(
              "Eliminada",
              "La noticia ha sido correctamente eliminada",
              "success"
            );
          } else {
            Swal.fire("Error", "La noticia no pudo ser eliminada", "warning");
          }
          props.consultarNews();
        } catch (error) {
          console.log(error);
          Swal.fire("Error", "La noticia no pudo ser eliminada", "warning");
        }
      }
    });
  };

  return (
    <Container>
      <Link to={"/noticias/" + props.new.title}>
        <h2>{props.new.title}</h2>
      </Link>
      <div>{props.new.preview}</div>
      <div className="mb-2">
        <Link
          className="btn btn-warning mr-2 text-light"
          to={`admin/editar/${props.new.id}`}
        >
          <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
        </Link>
        <Button variant="danger" onClick={() => borrarNoticia(props.new.id)}>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </Button>
      </div>
    </Container>
  );
}

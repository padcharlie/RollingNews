import React, { useState } from "react";
import {NavLink} from "react-router-dom"
import { Col, Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { FormGroup, Label, Input } from "reactstrap";
import Swal from "sweetalert2";
import { campoRequerido, rangoTexto } from "../common/helpers";
import "../Style.css";

export default function AgregarNoticia(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [preview, setPreview] = useState("");
  const [detail, setDetail] = useState("");
  const [img, setImg] = useState("");
  const [img2, setImg2] = useState("");
  const [imgalt, setImgAlt] = useState("");
  const [imgalt2, setImgAlt2] = useState("");
  const [destacada, setDestacada] = useState(false);

  const loggedAdmin = JSON.parse(localStorage.getItem("loggedAdmin"))

  const URLNews = process.env.REACT_APP_API_URL_NEWS;

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleDestacada = () => {
    if (destacada === false) {
      setDestacada(true);
    } else {
      setDestacada(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      campoRequerido(title) &&
      campoRequerido(author) &&
      campoRequerido(date) &&
      campoRequerido(preview) &&
      campoRequerido(detail) &&
      campoRequerido(img) &&
      campoRequerido(imgalt) &&
      rangoTexto(preview)
    ) {
      const noticiaNueva = {
        title,
        author,
        date,
        preview,
        detail,
        category,
        img,
        imgalt,
        img2,
        imgalt2,
        destacada,
      };
      try {
        const response = await fetch(URLNews, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(noticiaNueva),
        });
        if ((await response.status) === 201) {
          Swal.fire("Noticia agregada", ":)", "success");
        } else {
          Swal.fire(
            " NO agregada",
            "Error de conexi??n con el servidor",
            "error"
          );
        }
        e.target.reset();
        props.consultarNews();
        history.push("/admin")
      } catch (error) {
        console.log(error);
        Swal.fire(" NO agregada", "Error de conexi??n con el servidor", "error");
      }
    } else {
      Swal.fire("Oh no!", "Quedan campos por completar correctamente", "error");
    }
  };

  const history = useHistory();
  const bloquearPagina = () => {
    let isAdmin = false
    const admins = props.admins.map((name)=>{
      if (loggedAdmin === name.name){
        isAdmin=true
      }
    })
    if (isAdmin) {
      void(0)
    }else{
      console.log("props",props.admins)
    console.log("logged admin",loggedAdmin)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "??Debe ser admin para ingresar!",
        allowOutsideClick: false,
      }).then(history.push("/"));
    }
  };
 
  return (
    <Container>
      {bloquearPagina()}
      <h2>Agregar Noticias</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="titulo">T??tulo</Form.Label>
          <Form.Control
            type="text"
            id="titulo"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="resumen">Resumen de la noticia</Form.Label>
          <Form.Control
            type="text"
            id="resumen"
            aria-describedby="resumenHelpBlock"
            onChange={(e) => setPreview(e.target.value)}
          />
          <Form.Text id="resumenHelpBlock" muted>
            El resumen debe tener entre 1 y 200 caracteres. Ha escrito{" "}
            {preview.length} caracteres.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="noticia">Noticia</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            id="noticia"
            onChange={(e) => setDetail(e.target.value)}
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridImagen">
            <Form.Label>Primera imagen</Form.Label>
            <Form.Control
              type="text"
              placeholder="url"
              onChange={(e) => setImg(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridImgAlt">
            <Form.Label>Texto alternativo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Describa la imagen"
              onChange={(e) => setImgAlt(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridImg2">
            <Form.Label>Segunda imagen</Form.Label>
            <Form.Control
              type="text"
              placeholder="url"
              onChange={(e) => setImg2(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridImg2Alt">
            <Form.Label>Texto alternativo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Describa la imagen"
              onChange={(e) => setImgAlt2(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <FormGroup>
          <Label for="exampleSelectMulti">Categor??a</Label>
          <Form.Control
            as="select"
            name="selectMulti"
            id="exampleSelectMulti"
            multiple
            onChange={(e) => setCategory(e.target.value)}
          >
            {props.cats.map((c) => (
              <option value={c.name} onClick={handleCategory} key={c._id}>
                {c.name}
              </option>
            ))}
          </Form.Control>
          
        </FormGroup>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Autor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Autor"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" onChange={handleDate} onSelect={handleDate} />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Noticia destacada"
            onClick={handleDestacada}
          />
        </Form.Group>

        <div class="d-flex justify-content-center">
        <Button
            type="button"
           
            className="btn-light btn-outline-dark d-flex justify-center w-20 my-3 mx-2"
          ><NavLink exact={true} to="/admin/noticias" >
Volver sin publicar
          </NavLink>
            
          </Button>
          <Button
            type="submit"
            className="boton d-flex justify-center w-20 my-3 mx-2"
          >
            Publicar
          </Button>
        </div>
      </Form>
    </Container>
  );
}

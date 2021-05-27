import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, FormGroup } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Input, Label } from 'reactstrap';
import Swal from 'sweetalert2';

export default function EditarNoticias(props) {
    const [noticia,setNoticia]= useState({});
    const URLNEWS = process.env.REACT_APP_API_URL_NEWS;
    const {id}=useParams();
    const consultarNoticia = async() =>{
        try {
          const respuesta = await fetch(URLNEWS+"/"+id)
          if (respuesta.status === 200 ){
            const noticiaEncontrada = await respuesta.json();
            setNoticia(noticiaEncontrada);
          }
        } catch (error) {
          console.log(error);
          Swal.fire("!");
        }
    }
    useEffect(() => {
    consultarNoticia()
    }, [])
    
    const history = useHistory();

  const bloquearPagina = ()=>{
    if (props.admin === false){Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Debe ser admin para ingresar!",
        allowOutsideClick: false,
      }).then(history.push("/"))
 }};



    return (
        <Container>
        {bloquearPagina()}
        <h2>Agregar Noticias</h2>
        <Form >
          <Form.Group>
            <Form.Label htmlFor="titulo">Título</Form.Label>
            <Form.Control
              type="text"
              id="titulo"
              defaultValue={noticia.title}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="resumen">Resumen de la noticia</Form.Label>
            <Form.Control
              type="text"
              id="resumen"
              aria-describedby="resumenHelpBlock"
              defaultValue={noticia.preview}
            />
            <Form.Text id="resumenHelpBlock" muted>
              El resumen debe tener entre 1 y 200 caracteres. Ha escrito {" "}
               caracteres.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="noticia">Noticia</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              id="noticia"
              defaultValue={noticia.detail}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridImagen">
              <Form.Label>Primera imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="url"
                defaultValue={noticia.img}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridImgAlt">
              <Form.Label>Texto alternativo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Describa la imagen"
                defaultValue={noticia.imgalt}              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridImg2">
              <Form.Label>Segunda imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="url"
                defaultValue={noticia.img2}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridImg2Alt">
              <Form.Label>Texto alternativo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Describa la imagen"
                defaultValue={noticia.imgalt2}
              />
            </Form.Group>
          </Form.Row>
          <FormGroup>
            <Label for="exampleSelectMulti">Categoría - (Categoría antigua: {""}{noticia.category})</Label>
            
            <Input
              type="select"
              name="selectMulti"
              id="exampleSelectMulti"
              multiple
            >
              {props.cats.map((c) => (
                <option value={noticia.category}  key={c.id}>
                  {c.name} 
                </option>
              ))}
            </Input>
          </FormGroup>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Autor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Autor"
                defaultValue={noticia.author}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Fecha</Form.Label>
              <Form.Control type="date"  defaultValue={noticia.date}/>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Noticia destacada" defaultChecked={noticia.destacada && noticia.destacada === true}/>
    </Form.Group>
  
          <div class="d-flex justify-content-center">
            <Button
              type="submit"
              className="boton d-flex justify-center w-20 my-3"
              
            >
             Editar noticia
            </Button>
          </div>
        </Form>
      </Container>
    );
}

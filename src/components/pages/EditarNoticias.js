import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form, FormGroup } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Input, Label } from 'reactstrap';
import Swal from 'sweetalert2';
import { campoRequerido, rangoTexto } from '../common/helpers';

export default function EditarNoticias(props) {
    const [noticia,setNoticia]= useState({});
    const URLNEWS = process.env.REACT_APP_API_URL_NEWS;
    const tituloRef = useRef('');
    const resumenRef = useRef('');
    const detalleRef = useRef('');
    const imgRef = useRef('');
    const imgaltRef = useRef('');
    const img2Ref = useRef('');
    const imgalt2Ref = useRef('');
    const autorRef = useRef('');
    //categoria
    //const catagoriaBug = useRef('');
    const [category, setCategoria] = useState('');
    const [date, setDate] = useState('');
    const [destacada, setDestacada] = useState(false);
    const {_id}=useParams();
    const [previewCounter,setPreviewCounter] = useState("")
    const history = useHistory();
    const [loggedAdmin, setLoggedAdmin] = useState(
      JSON.parse(localStorage.getItem("loggedAdmin"))
    );
    
    const consultarNoticia = async() =>{
        try {
          const respuesta = await fetch(URLNEWS+"/"+_id)
          console.log("noticia encontrada respuesta",respuesta)
          if (respuesta.status === 200 ){
            const noticiaEncontrada = await respuesta.json();
            setNoticia(noticiaEncontrada);
            console.log("noticia encontrada",noticiaEncontrada)
          }
        } catch (error) {
          console.log(error);
          Swal.fire("!");
        }
    }
    useEffect(() => {
    consultarNoticia()
    }, [])
    
    const handleCategory = (e) => {
        setCategoria(e.target.value);
      };
    const handleDate = (e) => {
        setDate(e.target.value);
      };
  
      const handleDestacada = () =>
    {
      if (destacada === false) {
        setDestacada(true);
      }else {
        setDestacada(false);
      }
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log("titulo",rangoTexto(resumenRef.current.value))
        if(campoRequerido(tituloRef.current.value) && campoRequerido(resumenRef.current.value) && campoRequerido(detalleRef.current.value) && campoRequerido(imgRef.current.value) && campoRequerido(imgaltRef.current.value) &&  campoRequerido(autorRef.current.value) && rangoTexto(resumenRef.current.value) ){
          try{
            const noticiaModificada={
             title: tituloRef.current.value,
             preview: resumenRef.current.value,
             detail: detalleRef.current.value,
             img:imgRef.current.value,
             imgalt:imgaltRef.current.value,
             img2:img2Ref.current.value,
             imgalt2:imgalt2Ref.current.value,
             author:autorRef.current.value,
             
             date,
             category,
             destacada
            };

           

           

           
           console.log('Noticia modificada =', noticiaModificada)
            const respuesta = await fetch(`${URLNEWS}/${noticia._id}`,{
              method: "PUT",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(noticiaModificada)
              });
              
    
            if ((await respuesta.status) === 200) {
              Swal.fire("Noticia modificada",
              'Todo correcto',
              'success');
            props.consultarNews();
            history.push("/admin/noticias")
            }
          }catch(error){
              console.log(error)
            Swal.fire(" NO agregada", "Error de conexión con el servidor", "error");
          }
        }else{
            Swal.fire("Oh no!", "Quedan campos por completar correctamente", "error");

        }
      }

  const bloquearPagina = ()=>{
    if (loggedAdmin === ""){Swal.fire({
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
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="titulo">Título</Form.Label>
            <Form.Control
              type="text"
              id="titulo"
              defaultValue={noticia.title}
              ref={tituloRef}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="resumen">Resumen de la noticia</Form.Label>
            <Form.Control
              type="text"
              id="resumen"
              aria-describedby="resumenHelpBlock"
              defaultValue={noticia.preview}
              onChange={(e)=>setPreviewCounter(e.target.value)}
              ref={resumenRef}
            />
            <Form.Text id="resumenHelpBlock" muted>
    El resumen debe tener entre 1 y 100 caracteres.  .Total de caracteres tras la modificación: {previewCounter.length} 
    {" "}caracteres. <i>(Si no hay modificaciones el contador marcará 0)</i>
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="noticia">Noticia</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              id="noticia"
              defaultValue={noticia.detail}
              ref={detalleRef}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridImagen">
              <Form.Label>Primera imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="url"
                defaultValue={noticia.img}
              ref={imgRef}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridImgAlt">
              <Form.Label>Texto alternativo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Describa la imagen"
                defaultValue={noticia.imgalt} 
              ref={imgaltRef}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridImg2">
              <Form.Label>Segunda imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="url"
                defaultValue={noticia.img2}
              ref={img2Ref}

              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridImg2Alt">
              <Form.Label>Texto alternativo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Describa la imagen"
                defaultValue={noticia.imgalt2}
              ref={imgalt2Ref}

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
              required
              onChange={(e)=>setCategoria(e.target.value)}
            >
              {props.cats.map((c) => (
              <option value={c.name} onClick={handleCategory} key={c._id}>
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
              ref={autorRef}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Fecha</Form.Label>
              <Form.Control type="date" onSelect={handleDate} required defaultValue={noticia.date}/>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Noticia destacada" onClick={handleDestacada}  defaultChecked={noticia.destacada && noticia.destacada === true}/>
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

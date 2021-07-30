import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash } from "@fortawesome/free-solid-svg-icons";
import { campoRequerido } from "../common/helpers"
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

export default function AdminCategorias(props) {

    const [name, setName]=useState("");
    const URLCats = process.env.REACT_APP_API_URL_CAT; 
    const URLNEWS = process.env.REACT_APP_API_URL_NEWS;
    const history = useHistory();
    const loggedAdmin = JSON.parse(localStorage.getItem("loggedAdmin"));
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
          text: "¡Debe ser admin para ingresar!",
          allowOutsideClick: false,
        }).then(history.push("/"));
      }
    };
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
         campoRequerido(name)
        ) {

          const categoriaNueva = {
            name
          };
          try {
            const response = await fetch(URLCats,  {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(categoriaNueva)
              }
              );
            if ((await response.status) === 201) {
             Swal.fire("Categoría agregada",
             "La cateoría fue añadida correctamente",
             'success');
            e.target.reset();
            props.consultarCats();
          }} catch (error) {
            console.log(error);
            Swal.fire("Categoría no añadida",
            "Intente nuevamente en unos minutos",
            'error');
          }
        } else {
            Swal.fire("Categoría no añadida",
            "Intente nuevamente en unos minutos",
            'error');
        }
      };
    
const eliminarNoticias = async (name)=>{
  const noticiasEliminar = props.news.filter((n)=>n.category === name)
                console.log(noticiasEliminar)

                for (let i = 0; i < noticiasEliminar.length; i++) {
                  try{const response =  await fetch(URLNEWS + "/" + noticiasEliminar[i]._id, {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                }catch(error){
                  console.log("aqui falla",error)
                }}
              
}

    const eliminarCategoria= (_id,name) => {
        Swal.fire({
          title: "¿Desea eliminar la categoría?",
          text: "Eliminar la categoría elimina todas las noticias pertenecientes a la misma",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Eliminar",
          cancelButtonText: "Cancelar",
        }).then(async (result) => {
          if (result.isConfirmed) {
            
            try {
              const respuesta = await fetch(URLCats + "/" + _id, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              });
              
              if (respuesta.status === 200) {
                eliminarNoticias(name)
                Swal.fire(
                  "Categoría eliminada",
                  "La categoría seleccionada y las noticias pertenecientes a ellas fueron correctamente eliminada",
                  "success"
                  );
                  props.consultarCats();
                  props.consultarNews()
              }
             
            } catch (error) {
              console.log(error);
              Swal.fire(
                "Error",
                "La categoría seleccionada no fue  eliminada",
                "warning"
              );
            }
          }
        });
      };

    return (
        <div className="container mx-5">
          {bloquearPagina()}
            <h1 className="text-center my-3">Administrar categorías</h1>
            <h3>Añadir Categorías</h3>
            <div className="d-inline mt-3">
            <Form onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            placeholder="Ingrese una categoría"
            className="form-control"
            aria-describedby="helpBlock"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Text id="helpBlock" muted>
            Por favor no incluya acentos ni signos de puntuación
          </Form.Text>
          <Button className="btn my-1 btn-light btn-outline-primary" type="submit">
            Agregar
          </Button>
            </Form>
</div>
<h3>Todas las categorías</h3>
{props.cats.map((c)=><p>{c.name}<Button className="btn btn-light btn-outline-danger mx-5" onClick={() =>eliminarCategoria(c._id, c.name)}><FontAwesomeIcon icon={faTrash}> </FontAwesomeIcon> </Button>
</p>)}
        </div>
    )
};

import React, { Fragment} from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Noticias from "./Noticias";

export default function AdminNoticias(props) {
const noticias = props.news
const  mostrarNoticias =
    (noticias.length > 0) ? (
      noticias.map((n) => <Noticias new={n} key={n._id} consultarNews={props.consultarNews} />)
    ) : (
      <p>¡Hora de escribir noticias!</p>
    );
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
  

  return (
    <Fragment>
      {bloquearPagina()}
      <Link to="/admin/agregar"> <h1 className="mt-2 container colorMorado">Añadir Noticia</h1></Link>
      <h1 className="mx-3">Todas las noticias</h1>
      {mostrarNoticias}
    </Fragment>
  );
}
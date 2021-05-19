import React, { Fragment } from "react";
import { Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminPage(props) {
  const history = useHistory();
  const bloquearPagina = ()=>{
    if (props.admin === false){Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Debe ser admin para ingresar!",
        allowOutsideClick: false,
      }).then(history.push("/"))
    }};

  return( 
  <Fragment>
    {bloquearPagina()}
    
    </Fragment>);
}

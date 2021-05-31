import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function AdminPage() {
    const history = useHistory();
    const [loggedAdmin, setLoggedAdmin] = useState(
      JSON.parse(localStorage.getItem("loggedAdmin"))
    );
    const bloquearPagina = ()=>{
      if (loggedAdmin === ""){Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "¡Debe ser admin para ingresar!",
          allowOutsideClick: false,
        }).then(history.push("/"))
   }};
    return (
        <div>
            {bloquearPagina()}
            aaaa
        </div>
    )
}

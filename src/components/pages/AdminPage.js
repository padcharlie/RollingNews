import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
export default function AdminPage(props) {
  const history = useHistory();
  const loggedAdmin = JSON.parse(localStorage.getItem("loggedAdmin"))
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
    <div>
      {bloquearPagina()}
      <h2 className="text-center mt-2">¡Hola {loggedAdmin}!</h2>
      <div className="container my-3">
        <span>¿Qué desea hacer ahora?</span>
        <ListGroup>
          <ListGroupItem>
            <Link to="/admin/noticias">Ver noticias publicadas</Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link to="/admin/agregar">Publicar una noticia</Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link to="/admin/categorias">Editar categorías</Link>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
}

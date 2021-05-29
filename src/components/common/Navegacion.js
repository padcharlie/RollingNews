import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import ModalSuscripcion from "./ModalSuscripcion";
import ModalLogin from "./ModalLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function Navegacion(props) {
  const mascategorias = props.cats.filter(
    (c) =>
      c.name !== "Actualidad" &&
      c.name !== "Tecnologia" &&
      c.name !== "Deportes" &&
      c.name !== "Espectaculos"
  );

  const [loggedAdmin, setLoggedAdmin] = useState(
    JSON.parse(localStorage.getItem("loggedAdmin"))
  );

  const history = useHistory()
  const cerrarSesion = () => {
    localStorage.setItem("loggedAdmin", JSON.stringify(""));
    setLoggedAdmin("");
    history.push("/")
  };

  const mostrarAdmin = () => {
    if (loggedAdmin !== "") {
      return (
        <ButtonGroup>
          <Button className="btn m-2 btn-light">
            <Link style={{ textDecoration: "none" }} to="/admin/noticias">
              Administrar noticias
            </Link>
          </Button>

          <Button className="btn m-2 btn-light">
            <Link style={{ textDecoration: "none" }} to="/admin/categorias">
              Administrar categorias
            </Link>
          </Button>
          <Button onClick={cerrarSesion}>
            <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
          </Button>
        </ButtonGroup>
      );
    }
  };
  const mostrarNoAdmin = () => {
    if (loggedAdmin === "") {
      return (
        <ButtonGroup>
          <ModalSuscripcion />
          <ModalLogin
            admins={props.admins}
            consultarAdmin={props.consultarAdmin}
            setLoggedAdmin={setLoggedAdmin}
            mostrarAdmin={mostrarAdmin}
            mostarNoAdmin={mostrarNoAdmin}
          />
        </ButtonGroup>
      );
    }
  };

  useEffect(() => {
    mostrarAdmin();
    mostrarNoAdmin();
  },[]);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Rolling News</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink exact={true} to="/" className="nav-link">
            Inicio
          </NavLink>
          <NavLink
            exact={true}
            to={"/categorias/" + "Actualidad"}
            className="nav-link"
          >
            Actualidad
          </NavLink>
          <NavLink
            exact={true}
            to={"/categorias/" + "Tecnologia"}
            className="nav-link"
          >
            Tecnología
          </NavLink>
          <NavLink
            exact={true}
            to={"/categorias/" + "Deportes"}
            className="nav-link"
          >
            Deportes
          </NavLink>
          <NavLink
            exact={true}
            to={"/categorias/" + "Espectaculos"}
            className="nav-link"
          >
            Espectáculos
          </NavLink>
          <NavDropdown title="Más" id="basic-nav-dropdown">
            {mascategorias.map((c) => (
              <NavDropdown.Item key={c.id}>
                <NavLink
                  exact={true}
                  to={"/categorias/" + c.name}
                  className="nav-link"
                >
                  {c.name}
                </NavLink>
              </NavDropdown.Item>
            ))}
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
        <Nav className="mr-5">
          {mostrarAdmin()}
          {mostrarNoAdmin()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

import React, { useEffect, useState } from "react";
import { ButtonGroup, Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import ModalSuscripcion from "./ModalSuscripcion";
import ModalLogin from "./ModalLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../common/Navegacion.css";
import $ from "jquery";
import { faPlus, faPlusSquare, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function Navegacion(props) {
  const [loggedAdmin, setLoggedAdmin] = useState(
    JSON.parse(localStorage.getItem("loggedAdmin"))
  );

  const history = useHistory();
  const cerrarSesion = () => {
    localStorage.setItem("loggedAdmin", JSON.stringify(""));
    setLoggedAdmin("");
    history.push("/");
  };

  const mascategorias = props.cats.filter(
    (c) =>
      c.name !== "Actualidad" &&
      c.name !== "Tecnologia" &&
      c.name !== "Deportes" &&
      c.name !== "Espectaculos"
  );

  const mostrarAdmin = () => {
    if (loggedAdmin !== "") {
      return (
        <ButtonGroup>
          <Button className="btn m-2 boton2 ">
            <Link style={{ textDecoration: "none" }} className="text-light" to="/admin/noticias">
              Administrar noticias
            </Link>
          </Button>
          <Button className="btn m-2 boton2">
            <Link style={{ textDecoration: "none" }} className="text-light" to="/admin/categorias">
              Administrar categorias
            </Link>
          </Button>
          <Button className="m-2 boton2"onClick={cerrarSesion}>
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
          />
        </ButtonGroup>
      );
    }
  };

  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeigth = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimwidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft + "px",
      heigth: activeWidthNewAnimHeigth + "px",
      width: activeWidthNewAnimwidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeigth = $(this).innerHeight();
      var activeWidthNewAnimwidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeigth + "px",
        width: activeWidthNewAnimwidth + "px",
      });
    });
  }
  

  useEffect(() => {
    mostrarAdmin();
    mostrarNoAdmin();
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink
        exact={true}
       to="/"
        id="nav-link"
        className="navbar-brand navbar-logo"
      >
        Rolling News
      </NavLink>
      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type='button'
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon className="text-light "icon={faPlusSquare}></FontAwesomeIcon>
      </button>
      <div  className="collapse navbar-collapse" id="navbarSupportedContent">
      {mostrarAdmin()}
        {mostrarNoAdmin()}
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="rigth"></div>
          </div>
          <li className="nav-item active">
            <NavLink
              exact={true}
              to="/categorias/Actualidad"
              id="nav-link"
              className="nav-link"
            >
              Actualidad
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink
              exact={true}
              to="/categorias/Espectaculos"
              id="nav-link"
              className="nav-link"
            >
              Espectáculos
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink
              exact={true}
              to="/categorias/Tecnologia"
              id="nav-link"
              className="nav-link"
            >
              Tecnología
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink
              exact={true}
              to="/categorias/Deportes"
              id="nav-link"
              className="nav-link"
            >
              Deportes
            </NavLink>
          </li>
          <li>
              <NavDropdown title="Más" className='dropdown ' id="nav-link">
              {props.cats.map((c) => (
                <NavDropdown.Item>
                  <NavLink
                    exact={true}
                    to={"/categorias/" + c.name}
                    className="nav-link colorMorado"
                  >
                    {c.name}
                  </NavLink>
                </NavDropdown.Item>
              ))}
              <NavDropdown />
            </NavDropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
}

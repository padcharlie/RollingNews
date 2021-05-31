<<<<<<< HEAD
import React {useEffect} from 'react'
import {  Button, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import ModalSuscripcion from './ModalSuscripcion'
import ModalLogin from './ModalLogin'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../common/Navegacion.css'
import $ from 'jquery'
=======
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import ModalSuscripcion from "./ModalSuscripcion";
import ModalLogin from "./ModalLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
>>>>>>> d2f1a39b7493cfb0280a52588041df6daa7288e3

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
<<<<<<< HEAD
  }

  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeigth= activeItemNewAnim.innerHeight();
    var activeWidthNewAnimwidth=activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop= activeItemNewAnim.position();
    var itemPosNewAnimLeft= activeItemNewAnim.position();
    $('.hori-selector').css({
      'top':itemPosNewAnimTop.top + 'px',
      'left':itemPosNewAnimLeft + 'px',
      'heigth': activeWidthNewAnimHeigth + 'px',
      'width': activeWidthNewAnimwidth + 'px'
    });
    $('#navbarSupportedContent').on('click','li',function (e) {
      $('#navbarSupportedContent ul li').removeClass('active');
      $(this).addClass('active');
      var activeWidthNewAnimHeigth= $(this).innerHeight();
      var activeWidthNewAnimwidth=$(this).innerWidth();
      var itemPosNewAnimTop=$(this).position();
      var itemPosNewAnimLeft=$(this).position();
      $('.hori-selector').css({
        'top': itemPosNewAnimTop.top + 'px',
        'left':itemPosNewAnimLeft.left + 'px',
        'height':activeWidthNewAnimHeigth+ 'px',
        'width': activeWidthNewAnimwidth + 'px'
      })
    })
  }


  useEffect (()=> {
    animation();
  $ (window).on ('resize', function (){
    setTimeout(function () { animation
      ();}, 500);
    });
  }, []) ;

    return (
//         <Navbar bg="light" expand="lg">
//   <Navbar.Brand href="#home">Rolling News</Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <NavLink exact={true} to='/' className="nav-link">Inicio</NavLink>
//       <NavLink exact={true} to={"/categorias/"+"Actualidad"} className="nav-link">Actualidad</NavLink>
//       <NavLink exact={true} to={"/categorias/"+"Tecnologia"} className="nav-link">Tecnología</NavLink>
//       <NavLink exact={true} to={"/categorias/"+"Deportes"} className="nav-link">Deportes</NavLink>
//       <NavLink exact={true} to={"/categorias/"+"Espectaculos"} className="nav-link">Espectáculos</NavLink>
//       <NavDropdown title="Todas las categorías" id="basic-nav-dropdown">
//       {props.cats.map((c)=>(<NavDropdown.Item><NavLink exact={true} to={"/categorias/"+c.name} className="nav-link">{c.name}</NavLink></NavDropdown.Item>))}
//         <NavDropdown.Divider />
//       </NavDropdown>
//       </Nav>
//       <Nav className="mr-5">
//       <ModalSuscripcion/>
//       <ModalLogin/>
//       {mostrarAdmin()}
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
<nav className='navbar navbar-expand-lg navbar-mainbg'>
<NavLink exact={true} to='/'id='nav-link' className='navbar-brand navbar-logo'>Rolling News</NavLink>

<Button className="m-2" id='btnsubscrip' >Suscribirse</Button>
  <Button className="m-2" id='btnloguin' type="btn">Log In</Button>

  <button className='navbar-toggler'
  onClick={ function () {
    setTimeout(function (){
      animation();});
  }}
  data-toggle='collapse' data-target='#navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'><i className='fas fa-barra text-white'></i></button>
  <div className='collapse navbar-collapse' id='navbarSupportedContent'>
    <ul className='navbar-nav ml-auto'>
      <div className='hori-selector'>
        <div className='left'></div>
        <div className='rigth'></div>
      </div>
        <li className='nav-item active'>
        <NavLink exact={true} to='/categorias' id='nav-link' className="nav-link">Actualidad</NavLink>
        </li>
        <li className='nav-item active'>
        <NavLink exact={true} to='/categorias' id='nav-link' className="nav-link">Espectáculos</NavLink>
        </li>
        <li className='nav-item active'>
        <NavLink exact={true} to='/categorias' id='nav-link' className="nav-link">Tecnología</NavLink>
        </li>
        <li className='nav-item active'>
        <NavLink exact={true} to='/categorias' id='nav-link' className="nav-link">Deportes</NavLink>
        </li>
        <li>
        <NavDropdown title="Más" className='dropdown' id="nav-link">
        {props.cats.map((c)=>(<NavDropdown.Item><NavLink exact={true} to={"/categorias/"+c.name} className="nav-link">{c.name}</NavLink></NavDropdown.Item>))}
    <NavDropdown.Item><NavLink exact={true} to='/categorias'  className="nav-link">Política</NavLink></NavDropdown.Item>
    <NavDropdown.Item><NavLink exact={true} to='/categorias'  className="nav-link">Economía</NavLink></NavDropdown.Item>
    <NavDropdown.Item><NavLink exact={true} to='/categorias'  className="nav-link">Salud</NavLink></NavDropdown.Item>
    <NavDropdown.Item><NavLink exact={true} to='/categorias' className="nav-link">Fotografía</NavLink></NavDropdown.Item>
    <NavDropdown />
  </NavDropdown>
  <ModalSuscripcion/>
      <ModalLogin/>
      {mostrarAdmin()}
        </li>
    </ul>
   
  </div>
  </nav>
     )
 }
=======
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
              //------------------------------->  _id???????????????
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
>>>>>>> d2f1a39b7493cfb0280a52588041df6daa7288e3

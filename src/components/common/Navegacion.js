import React from 'react'
import {  Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import ModalSuscripcion from './ModalSuscripcion'
import ModalLogin from './ModalLogin'
import { Button } from 'react-bootstrap'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navegacion(props) {

  const mostrarAdmin = ()=>{
    if(props.admin === true){
      return(
      <Button className="btn m-2 btn-light"><Link style={{ textDecoration: 'none'}} to='/admin/agregar'><FontAwesomeIcon icon={faPlus}/></Link></Button>
      )
    }
  }
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Rolling News</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink exact={true} to='/' className="nav-link">Inicio</NavLink>
      <NavLink exact={true} to={"/categorias/"+"Actualidad"} className="nav-link">Actualidad</NavLink>
      <NavLink exact={true} to={"/categorias/"+"Tecnologia"} className="nav-link">Tecnología</NavLink>
      <NavLink exact={true} to={"/categorias/"+"Deportes"} className="nav-link">Deportes</NavLink>
      <NavLink exact={true} to={"/categorias/"+"Espectaculos"} className="nav-link">Espectáculos</NavLink>
      <NavDropdown title="Todas las categorías" id="basic-nav-dropdown">
      {props.cats.map((c)=>(<NavDropdown.Item><NavLink exact={true} to={"/categorias/"+c.name} className="nav-link">{c.name}</NavLink></NavDropdown.Item>))}
        <NavDropdown.Divider />
      </NavDropdown>
      </Nav>
      <Nav className="mr-5">
      <ModalSuscripcion/>
      <ModalLogin/>
      {mostrarAdmin()}
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

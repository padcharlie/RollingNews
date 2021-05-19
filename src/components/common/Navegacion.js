import React from 'react'
import {  Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import ModalSuscripcion from './ModalSuscripcion'
import ModalLogin from './ModalLogin'
import { Button } from 'react-bootstrap'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navegacion(props) {

  const mostrarAdmin = ()=>{
    if(props.admin === true){
      return(
      <Button className="btn m-2 btn-light"><Link style={{ textDecoration: 'none'}} to='/admin'><FontAwesomeIcon icon={faTools}/></Link></Button>
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
      {props.cats.map((c)=>(<NavLink exact={true} to={"/categorias/"+c.name} className="nav-link">{c.name}</NavLink>))}
      <NavDropdown title="Más" id="basic-nav-dropdown">
        <NavDropdown.Item><NavLink exact={true} to='/categorias' className="nav-link">Política</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink exact={true} to='/categorias' className="nav-link">Economía</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink exact={true} to='/categorias' className="nav-link">Salud</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink exact={true} to='/categorias' className="nav-link">Fotografía</NavLink></NavDropdown.Item>
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

import React from 'react'
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Navegacion() {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Rolling News</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink exact={true} to='/' className="nav-link">Inicio</NavLink>
      <NavLink exact={true} to='/categorias' className="nav-link">Actualidad</NavLink>
      <NavLink exact={true} to='/categorias' className="nav-link">Espectáculos</NavLink>
      <NavLink exact={true} to='/categorias' className="nav-link">Tecnología</NavLink>
      <NavLink exact={true} to='/categorias' className="nav-link">Deportes</NavLink>
      <NavDropdown title="Más" id="basic-nav-dropdown">
        <NavDropdown.Item><NavLink exact={true} to='/categorias' className="nav-link">Política</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink exact={true} to='/categorias' className="nav-link">Economía</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink exact={true} to='/categorias' className="nav-link">Salud</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink exact={true} to='/categorias' className="nav-link">Fotografía</NavLink></NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      </Nav>
      <Nav className="mr-5">
      <Button className="m-2" type="btn" >Suscribirse</Button>
      <Button className="m-2" type="btn">Log In</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

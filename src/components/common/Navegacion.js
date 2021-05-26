import React, {useEffect} from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../common/Navegacion.css'
import $ from 'jquery'



export default function Navegacion() {
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
       /* <Navbar expand="lg">
  <Navbar.Brand id='colorLetra' href="#home">Rolling News</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink exact={true} to='/'id='nav-link' className="nav-link">Inicio</NavLink>
      <NavLink exact={true} to='/categorias' id='nav-link' className="nav-link">Actualidad</NavLink>
      <NavLink exact={true} to='/categorias' id='nav-link' className="nav-link">Espectáculos</NavLink>
      <NavLink exact={true} to='/categorias' id='nav-link' className="nav-link">Tecnología</NavLink>
      <NavLink exact={true} to='/categorias' id='nav-link' className="nav-link">Deportes</NavLink>
      <NavDropdown title="Más" id="basic-nav-dropdown">
        <NavDropdown.Item><NavLink exact={true} to='/categorias'  className="nav-link">Política</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink exact={true} to='/categorias'  className="nav-link">Economía</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink exact={true} to='/categorias'  className="nav-link">Salud</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink exact={true} to='/categorias' className="nav-link">Fotografía</NavLink></NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      </Nav>
      <Nav className="mr-5">
      <Button className="m-2" id='btnsubscrip' >Suscribirse</Button>
      <Button className="m-2" id='btnloguin' type="btn">Log In</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>*/
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
        <NavDropdown.Item><NavLink exact={true} to='/categorias'  className="nav-link">Política</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink exact={true} to='/categorias'  className="nav-link">Economía</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink exact={true} to='/categorias'  className="nav-link">Salud</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink exact={true} to='/categorias' className="nav-link">Fotografía</NavLink></NavDropdown.Item>
        <NavDropdown />
      </NavDropdown>
            </li>
        </ul>
       
      </div>
  </nav>
    )}


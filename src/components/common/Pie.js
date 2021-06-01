import React, { Fragment } from 'react';
import {NavLink} from 'react-router-dom';
import "../common/Navegacion.css";

const Footer = () => {
    return (
      <div className='colordefondo'>
        <div className='text-center text-light d-flex py-3 justify-content-center'>
            <div><h6 className='flex-column mt-2'>Categorias:
            <NavLink exact={true} to='/' className='nav-link text-light'>Politica</NavLink>
      <NavLink exact={true} to='/' className='nav-link text-light'>Actualidad</NavLink>
      <NavLink exact={true} to='/' className='nav-link text-light'>Tecnologia</NavLink>
      </h6>  
      </div>
     <div><h6 className='flex-column'>
      <NavLink exact={true} to='/' className='nav-link text-light'>Deportes</NavLink>
      <NavLink exact={true} to='/' className='nav-link text-light'>Economia</NavLink>
      <NavLink exact={true} to='/' className='nav-link text-light'>Salud</NavLink>
      <NavLink exact={true} to='/' className='nav-link text-light'>Fotografia</NavLink> 
      </h6>
      </div>
      <div className='mx-3 mt-2'>
<h6>Encontranos en:</h6>
<a href="https://es-la.facebook.com/" className='text-light'>Facebook</a> <br />
<a href="https://twitter.com/home?lang=es" className='text-light'>Instagram</a> <br />
<a href="https://www.youtube.com/watch?v=tiDy3cuscFY" className='text-light'>Youtube</a> <br />
</div>
</div>
<p className='text-light text-center'>&copy; Todos los derechos resevados</p></div>
);
};
export default Footer;
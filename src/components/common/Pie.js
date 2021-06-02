import {NavLink} from 'react-router-dom';
import "../common/Navegacion.css";

const Footer = () => {
    return (
      <div className='colordefondo'>
        <div className='text-center text-light d-flex pt-3 justify-content-center'>
            <div><h6 className='flex-column mt-2'>Categorias:
            <NavLink exact={true} to='/categorias/Politica' className='nav-link text-light'>Politica</NavLink>
      <NavLink exact={true} to='/categorias/Actualidad' className='nav-link text-light'>Actualidad</NavLink>
      <NavLink exact={true} to='/categorias/Tecnologia' className='nav-link text-light'>Tecnologia</NavLink>
      </h6>  
      </div>
     <div><h6 className='flex-column'>
      <NavLink exact={true} to='/categorias/Deportes' className='nav-link text-light'>Deportes</NavLink>
      <NavLink exact={true} to='/categorias/Economia' className='nav-link text-light'>Economia</NavLink>
      <NavLink exact={true} to='/categorias/Salud' className='nav-link text-light'>Salud</NavLink>
      <NavLink exact={true} to='/categorias/Fotografia' className='nav-link text-light'>Fotografía</NavLink> 
      </h6>
      </div>
      <div className='mx-3 mt-2'>
<h6>Encontranos en:</h6>
<a href="https://es-la.facebook.com/" target="_blank" rel="noreferrer" className='text-light'>Facebook</a> <br />
<a href="https://www.instagram.com/rollingcodeschool/" rel="noreferrer" target="_blank" className='text-light'>Instagram</a> <br />
<a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className='text-light'>Youtube</a> <br />
</div>
</div>
<div className='d-flex justify-content-center'>
<NavLink exact={true} to='/aboutUs' className='lead nav-link text-light'>About us</NavLink>
<NavLink exact={true} to='/ContacUs' className='lead nav-link text-light'>contactanos</NavLink></div>
<p className='text-light text-center'>&copy; Todos los derechos reservados</p></div>
);
};
export default Footer;
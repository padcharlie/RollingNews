import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom'

export default function NoticiasCategorias(props) {
    const destacada = (props.new.destacada)? (<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>) : ("")
     
    return (
        <div className="container">
        
        <Link to={"/noticias/"+props.new.title}><h4>{destacada}{props.new.title}</h4></Link>
        <p>{props.new.preview}</p>
        </div>
    )
}

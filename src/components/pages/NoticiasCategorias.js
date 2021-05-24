import React from 'react'
import { Link } from 'react-router-dom'

export default function NoticiasCategorias(props) {
    const destacada = ()=>{
        if(props.new.destacada===true){return(<p>*</p>)}
     };
    return (
        <div className="container">
        
        <Link to={"/noticias/"+props.new.title}><h4>{props.new.title}</h4>{destacada()}</Link>
        <p>{props.new.preview}</p>
        </div>
    )
}

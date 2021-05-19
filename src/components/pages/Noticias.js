import React from 'react'
import { Link } from 'react-router-dom'

export default function Noticias(props) {
    console.log("a", props.new)
    return (
        <div className="container">
        <Link to={"/noticias/"+props.new.title}><h4>{props.new.title}</h4></Link>
        <p>{props.new.preview}</p>
        </div>
    )
}

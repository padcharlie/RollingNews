import React from 'react'

export default function Noticias(props) {
console.log(props.new)
    return (
        <div className="container">
        <h4>{props.new.title}</h4>
        <p>{props.new.author}{props.new.date} </p>
        <p>{props.new.preview}</p>
        <img src={props.new.img}></img>
        <p> {props.new.detail} </p>
        <img src={props.new.img2}></img>
        </div>
    )
}

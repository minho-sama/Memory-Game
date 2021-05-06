import React from 'react'

export function Card({img, name}) {
    return (
        <div className = "charCard" onClick = {() => alert('hey')}>
            <img src = {img} alt = {name}/>
            <h3>{name}</h3>
        </div>
    )
}

export default Card

import React from 'react'

export function Card({img, name, id, playRound}) {
    return (
        <div className = "charCard" 
            onClick = {() => {
                playRound(id)
            }}>
            <img src = {img} alt = {name}/>
            <h3>{name}</h3>
        </div>
    )
}

export default Card

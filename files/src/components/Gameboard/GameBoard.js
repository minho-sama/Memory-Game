import React from 'react';
import './gameBoard.css'
import Card from './Card'

export function GameBoard({characterArr}) {
    return (
        <div className = 'gameBoard'>
            {
              characterArr.map((char) => {
                return <Card key = {char.id} img = {char.img} name = {char.text}/>
              })
            }
        </div>
    )
}

export default GameBoard

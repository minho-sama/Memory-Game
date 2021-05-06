import React from 'react';
import './gameBoard.css'
import Card from './Card'

export function GameBoard({characterArr, playRound}) {
    return (
        <div className = 'gameBoard'>
            {
              characterArr.map((char) => {
                return <Card key = {char.id}img = {char.img} name = {char.text} id = {char.id} playRound = {playRound}/>
              })
            }
        </div>
    )
}

export default GameBoard

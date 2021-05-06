import React from 'react'
import './GameOver.css'

function GameOver({setIsGameOver, score, setScore, clickedCharArr}) {
    return (
        <div className = 'gameOver-box'>
            <h1>Your journey to Mordor ends here</h1>
            <p>You scored {score} points!</p>
            <button onClick = {() => {
                setScore(0);
                setIsGameOver(false);
            }}>Play Again</button>
        </div>
    )
}

export default GameOver

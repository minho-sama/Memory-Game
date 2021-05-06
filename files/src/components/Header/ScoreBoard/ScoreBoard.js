export function ScoreBoard({scoreProps}) {
    const {score, record} = scoreProps;
    return (
        <div className = 'scoreBoard'>
            <p>Your record: <span>{record}</span></p>
            <p>Current Score: <span>{score}</span></p>
        </div>
    )
}

export default ScoreBoard

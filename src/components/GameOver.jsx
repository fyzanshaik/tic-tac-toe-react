const GameOver = ({ winnerSymbol, restart }) => {
    return <div id="game-over">
        <h2>GAME OVER!</h2>
        {winnerSymbol && <p>{winnerSymbol} Won!</p>}
        {!winnerSymbol && <p>It's a draw! :(</p>}
        <p>
            <button onClick={restart} >Play Again!?</button>
        </p>
    </div>
}

export default GameOver;
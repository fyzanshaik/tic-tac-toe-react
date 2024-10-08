import { useCallback, useState } from "react";
import PlayerInfo from "./components/Player-info"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
const App = () => {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const handleChangeActivePlayer = useCallback((rowIndex, colIndex) => {
    setActivePlayer((prevActivePlayer) => prevActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns]

      return updatedTurns;
    })
  }, [])

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo initialName="Player 1" symbolName="X" isActive={activePlayer === 'X'} ></PlayerInfo>
          <PlayerInfo initialName="Player 2" symbolName="O" isActive={activePlayer === 'O'}></PlayerInfo>
        </ol>
        <GameBoard onChangeActivePlayer={handleChangeActivePlayer} allTurns={gameTurns}></GameBoard>
      </div>
      <Log></Log>
    </main>
  )
}

export default App

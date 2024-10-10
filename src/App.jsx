import { useCallback, useState } from "react";
import PlayerInfo from "./components/Player-info"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";


const derivedActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}


const App = () => {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]); //gameTurns : [{square:{row:1,col:0},player:X||O}]

  const activePlayer = derivedActivePlayer(gameTurns);


  const handleChangeActivePlayer = useCallback((rowIndex, colIndex) => {
    // setActivePlayer((prevActivePlayer) => prevActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns(prevTurns => {
      const currentPlayer = derivedActivePlayer(prevTurns);
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
      <Log turns={gameTurns}></Log>
    </main>
  )
}

export default App

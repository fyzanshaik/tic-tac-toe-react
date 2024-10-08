import { useCallback, useState } from "react";
import PlayerInfo from "./components/Player-info"
import GameBoard from "./components/GameBoard"
const App = () => {
  const [activePlayer, setActivePlayer] = useState('X');

  const handleChangeActivePlayer = useCallback(() => {
    setActivePlayer((prevActivePlayer) => {
      // prevActivePlayer === 'X' ? 'O' : 'X';
      if (prevActivePlayer === 'X') return 'O';
      else return 'X';
    })
  }, [])

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo initialName="Player 1" symbolName="X" isActive={activePlayer === 'X'} ></PlayerInfo>
          <PlayerInfo initialName="Player 2" symbolName="O" isActive={activePlayer === 'O'}></PlayerInfo>
        </ol>
        <GameBoard onChangeActivePlayer={handleChangeActivePlayer} activePlayerSymbol={activePlayer} ></GameBoard>
      </div>
    </main>
  )
}

export default App

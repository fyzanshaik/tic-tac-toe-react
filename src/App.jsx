import { useCallback, useState } from "react";
import PlayerInfo from "./components/Player-info"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import WINNING_COMBINATIONS from "./winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

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
  const [playerData, setPlayerData] = useState({
    X: "Player 1",
    O: "Player 2"
  })

  const handlePlayerDataChange = useCallback((symbol, newName) => {
    setPlayerData((prevPlayerData) => {
      return {
        ...prevPlayerData,
        [symbol]: newName
      }
    })
  }, [])

  let winner = null;
  const activePlayer = derivedActivePlayer(gameTurns);
  let gameBoard = [...initialGameBoard.map(arr => [...arr])];

  for (const eachTurn of gameTurns) {
    const { square, player } = eachTurn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combinations[0].row][combinations[0].column];
    const secondSymbol = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSymbol = gameBoard[combinations[2].row][combinations[2].column];

    if (firstSymbol && firstSymbol == secondSymbol && secondSymbol == thirdSymbol) {
      winner = playerData[firstSymbol];
    }

  }

  let drawCheck = gameTurns.length === 9 && !winner;
  const handleRestart = () => {
    setGameTurns([]);
    winner = null; drawCheck = null;

  }

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
          <PlayerInfo initialName="Player 1" symbolName="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerDataChange} ></PlayerInfo>
          <PlayerInfo initialName="Player 2" symbolName="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerDataChange}></PlayerInfo>
        </ol>
        {(winner || drawCheck) && <GameOver winnerSymbol={winner} restart={handleRestart} />}
        <GameBoard onChangeActivePlayer={handleChangeActivePlayer} board={gameBoard} ></GameBoard>
      </div>
      <Log turns={gameTurns}></Log>
    </main>
  )
}

export default App

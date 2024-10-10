import { useCallback, useState, useMemo } from "react";
import PlayerInfo from "./components/PlayerInfo";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import WINNING_COMBINATIONS from "./constants/winning-combinations";
import { derivedActivePlayer } from "./utils/derivedActivePlayer";
import { derivedWinner } from "./utils/derivedWinner";
import { initialGameBoard } from "./utils/initialGameBoard";

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerData, setPlayerData] = useState({
    X: "Player 1",
    O: "Player 2"
  });

  const handlePlayerDataChange = useCallback((symbol, newName) => {
    setPlayerData((prevPlayerData) => ({
      ...prevPlayerData,
      [symbol]: newName
    }));
  }, []);

  const gameBoard = useMemo(() => {
    const board = initialGameBoard.map(arr => [...arr]);
    gameTurns.forEach(({ square, player }) => {
      const { row, col } = square;
      board[row][col] = player;
    });
    return board;
  }, [gameTurns]);

  const winner = useMemo(() => {
    return derivedWinner(gameBoard, playerData);
  }, [gameBoard, playerData]);

  const isDraw = useMemo(() => gameTurns.length === 9 && !winner, [gameTurns, winner]);

  const handleRestart = useCallback(() => {
    setGameTurns([]);
  }, []);

  const handleChangeActivePlayer = useCallback((rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = derivedActivePlayer(prevTurns);
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
      return updatedTurns;
    });
  }, []);

  const activePlayer = useMemo(() => derivedActivePlayer(gameTurns), [gameTurns]);

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo
            initialName="Player 1"
            symbolName="X"
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerDataChange}
          />
          <PlayerInfo
            initialName="Player 2"
            symbolName="O"
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerDataChange}
          />
        </ol>
        {(winner || isDraw) && <GameOver winnerSymbol={winner} restart={handleRestart} />}
        <GameBoard onChangeActivePlayer={handleChangeActivePlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} playerData={playerData} />
    </main>
  );
};

export default App;

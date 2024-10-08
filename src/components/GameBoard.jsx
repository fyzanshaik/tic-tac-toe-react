import { useCallback, useState } from "react";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    const handleSelectSquare = useCallback((rowIndex, colIndex) => {
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = "X" || "O";
            return updatedGameBoard;
        })
    }, [])
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, playerSymbolIndex) => {
                                return (
                                    <li key={playerSymbolIndex}>
                                        <button onClick={() => { handleSelectSquare(rowIndex, playerSymbolIndex) }}>{playerSymbol}</button>
                                    </li>
                                );
                            })}
                        </ol>
                    </li>
                );
            })}
        </ol>
    );
};

export default GameBoard;

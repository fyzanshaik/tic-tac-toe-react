import { useCallback, useState } from "react";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
const GameBoard = ({ onChangeActivePlayer, allTurns }) => {

    let gameBoard = initialGameBoard;

    for (const eachTurn of allTurns) {
        const { square, player } = eachTurn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    // const handleSelectSquare = useCallback((rowIndex, colIndex) => {

    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGameBoard;
    //     })
    //     onChangeActivePlayer();
    // }, [onChangeActivePlayer, activePlayerSymbol])
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, playerSymbolIndex) => {
                                return (
                                    <li key={playerSymbolIndex}>
                                        <button onClick={() => onChangeActivePlayer(rowIndex, playerSymbolIndex)}>{playerSymbol}</button>
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

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
    //bad method solved it even easier 
    const checkForAvailability = useCallback((rowIndex, colIndex) => {
        if (gameBoard[rowIndex][colIndex] == null) {
            return false;
        }
        return true;
    }, [gameBoard])

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
                            {row.map((col, colIndex) => {
                                return (
                                    <li key={colIndex}>
                                        <button disabled={col !== null} onClick={() => onChangeActivePlayer(rowIndex, colIndex)}>{col}</button>
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

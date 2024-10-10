import { useCallback, useState } from "react";

const GameBoard = ({ onChangeActivePlayer, board }) => {

    //bad method solved it even easier 
    const checkForAvailability = useCallback((rowIndex, colIndex) => {
        if (board[rowIndex][colIndex] == null) {
            return false;
        }
        return true;
    }, [board])

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
            {board.map((row, rowIndex) => {
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

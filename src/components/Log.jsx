import { useCallback } from "react";

const Log = ({ turns, playerData }) => {
    const playerName = useCallback((playerSymbol) => {
        const { X, O } = playerData;
        if (playerSymbol == 'X') {
            return X
        } return O
    }, [playerData])


    return <ol id="log">
        {turns.map((turn, index) =>
            <li key={index}>{playerName(turn.player)} selected {turn.square.row} {turn.square.col}</li>
        )}

    </ol>
}

export default Log;
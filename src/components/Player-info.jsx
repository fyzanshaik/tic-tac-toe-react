import { useCallback, useState } from "react"

const PlayerInfo = ({ playerName, symbolName }) => {
    const [isEditing, setIsEditing] = useState(false);
    const changeEditState = useCallback(() => {
        setIsEditing(prevEditState => !prevEditState);
    }, [])

    let playerHTML = <span className="player-name">{playerName}</span>

    if (isEditing) {
        playerHTML = <input defaultValue={playerName} placeholder="Enter Name"></input>;
    }

    return (
        <li>
            <span className="player">
                {playerHTML}
                <span className="player-symbol">{symbolName}</span>
            </span>
            <button onClick={changeEditState}>{isEditing ? "Save" : "Edit"}</button>
        </li>

    )
}

export default PlayerInfo
import { useCallback, useEffect, useRef, useState } from "react"

const PlayerInfo = ({ initialName, symbolName, isActive }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    const inputRef = useRef(null);
    const changeEditState = useCallback(() => {
        setIsEditing(prevEditState => !prevEditState);
    }, [])

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing])

    const handleInputChange = useCallback((event) => {
        if (event.target.value.length === 0) {
            setPlayerName("Player 1")
        } else {
            setPlayerName(event.target.value);
        }
    }, [])
    let playerHTML = <span className="player-name">{playerName}</span>

    if (isEditing) {
        playerHTML = <input value={playerName} ref={inputRef} onChange={handleInputChange} placeholder="Enter Name"></input>;
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerHTML}
                <span className="player-symbol">{symbolName}</span>
            </span>
            <button onClick={changeEditState}>{isEditing ? "Save" : "Edit"}</button>
        </li>

    )
}

export default PlayerInfo
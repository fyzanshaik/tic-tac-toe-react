import PlayerInfo from "./components/Player-info"
import GameBoard from "./components/GameBoard"
const App = () => {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo initialName="Player 1" symbolName="X"></PlayerInfo>
          <PlayerInfo initialName="Player 2" symbolName="O"></PlayerInfo>
        </ol>
        <GameBoard></GameBoard>
      </div>
    </main>
  )
}

export default App

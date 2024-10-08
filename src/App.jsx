import PlayerInfo from "./components/Player-info"

const App = () => {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo playerName="Player 1" symbolName="X"></PlayerInfo>
          <PlayerInfo playerName="Player 2" symbolName="O"></PlayerInfo>
        </ol>
      </div>
    </main>
  )
}

export default App

# Tic-Tac-Toe Game

This is a **Tic-Tac-Toe** game built with **React**. The game allows two players to take turns placing their symbol ('X' or 'O') on a 3x3 grid. The game ends when one player wins by lining up three symbols in a row (horizontally, vertically, or diagonally), or when the game ends in a draw.

## Features
- **Player Information:** Players can edit their names.
- **Real-Time Gameplay:** Players take turns to make their moves.
- **Winning Detection:** The game detects and announces the winner based on a set of predefined winning combinations.
- **Game Logs:** Logs display the moves each player makes.
- **Restart Functionality:** The game can be restarted at any time.
- **Draw Detection:** If all squares are filled without a winner, the game ends in a draw.

## Project Structure
```
/src
  ├── /assets
  │     └── /styles
  │           └── index.css               # Global styles
  ├── /components
  │     ├── PlayerInfo.jsx                # Player information and name editing
  │     ├── GameBoard.jsx                 # Main game board UI
  │     ├── GameOver.jsx                  # Game over message (win or draw)
  │     ├── Log.jsx                       # Turn-by-turn log display
  ├── /constants
  │     └── winning-combinations.js       # Defines the winning combinations for the game
  ├── /utils
  │     ├── derivedActivePlayer.js        # Function to derive the current active player
  │     ├── derivedWinner.js              # Function to determine the winner
  │     └── initialGameBoard.js           # Initial empty state of the game board
  ├── App.jsx                             # Main component handling game logic
  ├── index.jsx                           # Entry point to the app
```

## Getting Started

### Prerequisites
- **Node.js** (>=14.x)
- **npm** (>=6.x) or **yarn** (>=1.x)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tic-tac-toe.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tic-tac-toe
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the App
To run the application locally:

```bash
npm start
```
or

```bash
yarn start
```

The app will be available at `http://localhost:3000`.

## How to Play
1. Enter your name in the respective input fields for Player 1 and Player 2.
2. Take turns by clicking on the game board to place your symbol (X or O).
3. The game ends when a player wins or when the board is filled with no winner.
4. Click "Play Again" to restart the game.

## Built With
- **React**: A JavaScript library for building user interfaces
- **JavaScript (ES6+)**
- **CSS3**

## License
This project is licensed under the MIT License.

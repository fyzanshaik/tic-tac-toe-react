import WINNING_COMBINATIONS from '../constants/winning-combinations';
export const derivedWinner = (gameBoard, playerData) => {
	for (const combination of WINNING_COMBINATIONS) {
		const [a, b, c] = combination;
		const firstSymbol = gameBoard[a.row][a.column];
		if (firstSymbol && firstSymbol === gameBoard[b.row][b.column] && firstSymbol === gameBoard[c.row][c.column]) {
			return playerData[firstSymbol];
		}
	}
	return null;
};

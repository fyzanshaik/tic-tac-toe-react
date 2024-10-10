export const derivedActivePlayer = (gameTurns) => {
	return gameTurns.length % 2 === 0 ? 'X' : 'O';
};

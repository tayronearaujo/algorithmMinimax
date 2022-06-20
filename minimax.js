const initialBoard = Array.from(Array(9).keys());

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

function emptyBoardPositions(board) {
	return board.filter(s => typeof s == 'number');
}

function checkWinner(mimic_board, player) {
    let winner = null;
    let plays = [];
    for (let i = 0; i < mimic_board.length; i++) {
        if (mimic_board[i] === player) {
            plays.push(i);
        }
    }
    for (let i = 0; i < winCombos.length; i++) {
        if (plays.includes(winCombos[i][0]) && plays.includes(winCombos[i][1]) &&
            plays.includes(winCombos[i][2])) {
            winner = { i, player };
            break;
        }
    }
    return winner;
}

function minimax(currentBoard, player) {
	let openSpots = emptyBoardPositions(currentBoard);

	if (checkWinner(currentBoard, 'O')) {
		return {score: -10};

	} else if (checkWinner(currentBoard, 'X')) {
		return {score: 10};
	} else if (openSpots.length === 0) {
		return {score: 0};
	}


	let moves = [];
	for (let i = 0; i < openSpots.length; i++) {
		let move = {};
		move.index = currentBoard[openSpots[i]];
		currentBoard[openSpots[i]] = player;



		if (player == 'X') {
			let result = minimax(currentBoard, 'O');
            console.log(result)
			move.score = result.score;   
		} 
        else {
			let result = minimax(currentBoard, 'X');
			move.score = result.score;
		}
		currentBoard[openSpots[i]] = move.index;
		moves.push(move);
	}

	let bestMove;
	if(player === 'X') {
		let bestScore = -Infinity;
		for(let i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		let bestScore = Infinity;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}

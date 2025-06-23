let board = [];
for (let i = 0; i < 8; i++) {
  board[i] = [];
  for (let j = 0; j < 8; j++) board[i][j] = "";
}

function allowedMoves(pos) {
  const firstMove = [pos[0] + 2, pos[1] + 1];
  const secondMove = [pos[0] + 2, pos[1] - 1];
  const thirdMove = [pos[0] - 2, pos[1] + 1];
  const forthMove = [pos[0] - 2, pos[1] - 1];
  const fifthMove = [pos[0] + 1, pos[1] + 2];
  const sixthMove = [pos[0] - 1, pos[1] + 2];
  const seventhMove = [pos[0] - 1, pos[1] - 2];
  const eightMove = [pos[0] + 1, pos[1] - 2];

  const moves = [
    firstMove,
    secondMove,
    thirdMove,
    forthMove,
    fifthMove,
    sixthMove,
    seventhMove,
    eightMove,
  ];
  const allowedMoves = [];
  for (let i = 0; i < moves.length; i++) {
    if (moves[i][0] >= 0 && moves[i][1] >= 0) {
      allowedMoves.push(moves[i]);
    }
  }
  return allowedMoves;
}

export function knightMoves(start, end) {
  const queue = [start];
  const dist =Array(64).fill(-1);
  const path = [];
  while (queue.length != 0) {
    console.log(queue)
    const node = queue.shift();
    path.push(node);
    const moves = allowedMoves(node);
    const foundEnd = moves.some(move=> end[0]==move[0] && end[1]==move[1]);
    if (foundEnd){
        path.push(end);
        return path;
    }
    for (let i =0; i<moves.length; i++)
        queue.push(moves[i]);
  }
}

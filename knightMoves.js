
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
    if (moves[i][0] >= 0 && moves[i][1] >= 0 && moves[i][0] < 8 && moves[i][1] <8) { 
      // make sure only positive and less than 8 moves exist {0,1,2,...,7}
      allowedMoves.push(moves[i]);
    }
  }
  return allowedMoves;
}

function shortestPath(s,par,dist,d){
  const q=[]
  q.push(s);
  dist[s[0]][s[1]]=0;

  while (q.length >0){
    const node =q.shift();
    const moves = allowedMoves(node);
    for (const neighbor of moves){
      if (dist[neighbor[0]][neighbor[1]] === Infinity){
        par[neighbor[0]][neighbor[1]] = node;
        dist[neighbor[0]][neighbor[1]] = dist[node[0]][node[1]] +1;
        if (d[0] == neighbor[0] && d[1] == neighbor[1]) return;
        q.push(neighbor);
      }
    }
  }
}

export function knightMoves(start, end) {
  const dist = [];
  const par = [];
  for (let i=0; i<8; i++){ //initialize par, dist with all possible moves
    dist[i]=[];
    par[i]=[];
    for (let j=0; j<8; j++){
      dist[i][j]=Infinity;
      par[i][j]=-1;
    }
  }
  shortestPath(start,par,dist,end); //get shortest path for each node and save it in par (with cost in dist)
  let path = [];
  path.push(end);
  let currentNode = end;
  while (par[currentNode[0]][currentNode[1]] !=-1){
    path.push(par[currentNode[0]][currentNode[1]]);
    currentNode = par[currentNode[0]][currentNode[1]];
  }
  path = path.reverse();
  return path;
}
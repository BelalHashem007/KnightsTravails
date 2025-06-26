import { knightMoves } from "./knightMoves.js";
const path = knightMoves([3,3],[4,3]);
console.log("You made it in "+path.length+" moves! Here`s your path:\n")
for (let i=0; i<path.length; i++)
    console.log(`[${path[i]}]`)
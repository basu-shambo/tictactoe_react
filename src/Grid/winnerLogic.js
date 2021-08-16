const possiblePositions = 
[
    ["00","01","02"],
    ["10","11","12"],
    ["20","21","22"],
    ["00","10","20"],
    ["01","11","21"],
    ["02","12","22"],
    ["00","11","22"],
    ["20","11","02"]
];
/**
 * 
 * @param {string[][]} grid 
 * @returns whether any palyer has won
 */
export const CheckWinner=(grid)=>{
    // const isWon = possiblePositions.reduce((acc,curr)=>{
        
    //     return acc||check(grid,curr[0],curr[1],curr[2],setWinnigPositions)
    // },false);
    const winners = new Set();
    possiblePositions.forEach((position)=>{
        const p = grid[parseInt(position[0][0])][parseInt(position[0][1])];
        const q = grid[parseInt(position[1][0])][parseInt(position[1][1])];
        const r = grid[parseInt(position[2][0])][parseInt(position[2][1])];
        if(p&&q&&r&&p===q&&q===r&&p===r){
            winners.add(position[0]);
            winners.add(position[1]);
            winners.add(position[2]);
            return winners;
        }
    })
    return winners;
}

/**
 * 
 * @param {string[][]} grid 
 * @returns if the game is a draw
 */
export const CheckDraw = (grid,)=>{
    const isDraw = grid.reduce((acc,curr)=>{
        const row = curr.reduce((a,c)=>a&&c?true:false);
        return acc && row;
    },true)
    return isDraw;
}

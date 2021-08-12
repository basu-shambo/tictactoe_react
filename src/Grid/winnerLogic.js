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
    const isWon = possiblePositions.reduce((acc,curr)=>{
        
        return acc||check(grid,curr[0],curr[1],curr[2])
    },false);
    return isWon;
}

/**
 * 
 * @param {string[][]} grid 
 * @returns if the game is a draw
 */
export const CheckDraw = (grid)=>{
    const isDraw = grid.reduce((acc,curr)=>acc && curr)
    return isDraw;
}

/**
 * Checks if the grid at positions a,b,c are the same
 * @param {string[][]} grid 
 * @param {string} a - first positon of the grid
 * @param {string} b - second positon of the grid
 * @param {sting} c - third positon of the grid
 * @returns true if the grid at the positions are the same
 */
const check=(grid,a,b,c)=>{
    const p = grid[parseInt(a[0])][parseInt(a[1])];
    const q = grid[parseInt(b[0])][parseInt(b[1])];
    const r = grid[parseInt(c[0])][parseInt(c[1])];
    if(p&&q&&r&&p===q&&q===r&&p===r){
        document.querySelector(`#p${a}`).style.backgroundColor = "burlywood";
        document.querySelector(`#p${b}`).style.backgroundColor = "burlywood";
        document.querySelector(`#p${c}`).style.backgroundColor = "burlywood";
        return true; 
    }
    return false;
}
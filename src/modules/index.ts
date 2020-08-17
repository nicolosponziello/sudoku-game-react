/**
 * return the first empty spot it finds. Undefined otherwise
 * @param board sudoku board
 * @param boardSize size of the board
 */

export function find_empty(board: Array<number | undefined>, boardSize: number): number | undefined  {
    for (let i = 0; i < board.length; i++){
        if(board[i] == undefined){
            return i;
        }
    }
    return undefined;
}

/**
 * check if the board is valid inserting possibleNum in index position
 * @param board sudoku board
 * @param index position in which inserting the element
 * @param possibleNum possible number for the selected position
 * @param boardSize size of the board
 */
export function valid(board: Array<number | undefined>, index: number, possibleNum: number, boardSize: number): boolean {
    let row = Math.floor(index / boardSize**2);
    let col = index % boardSize**2;
    // check the row
    for(let i = 0; i < boardSize**2; i++){
        if(board[row * boardSize**2 +i] == possibleNum){
            console.log("violated row");
            return false;
        }
    }

    // check the col
    for (let i = 0; i < boardSize**2; i++){
        if(board[col + i*boardSize**2] == possibleNum){
            console.log("violated col");
            return false;
        }
    }

    // check the box
    let box_x = Math.floor(col / boardSize);
    let box_y = Math.floor(row / boardSize);
    for (let i = box_y * boardSize; i < box_y*boardSize + boardSize; i++){
        for (let j = box_x * boardSize; j < box_x * boardSize + boardSize; j++){
            let possibleIndex = i*(boardSize**2) + j;
            console.log("square check", possibleIndex);
            if(board[possibleIndex] == possibleNum && possibleIndex != index){
                console.log("violated square");
                return false;
            }
        }
    }
    return true;
}

/**
 * solve the sudoku board using backtracking
 * @param board 
 * @param boardSize 
 */
export function solve(board: Array<number | undefined>, boardSize: number): boolean {
    let emptyIndex = find_empty(board, boardSize);
    console.log("current solving index", emptyIndex);
    if (emptyIndex == undefined){
        console.log("Solved", board);
        return true;
    }
    for (let i = 1; i <= boardSize**2; i++){
        console.log(i);
        if(valid(board, emptyIndex, i, boardSize)){
            console.log(i, "valid at", emptyIndex);
            board[emptyIndex] = i;
            if(solve(board, boardSize)){
                return true;
            }
            board[emptyIndex] = undefined;        
        }
    }

    return false;
}
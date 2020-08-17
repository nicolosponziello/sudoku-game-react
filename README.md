# Sudoku game

This project is a Sudoku game made with React and Typescript.
To try this project, just:
* clone the repo
* ```npm install```
* ```npm start```

## Functionality
This project allows to:
* generate a new board, based on the difficult choosed
* play the game
* solve the board automatically

### Solving the board
The algorithm used to solve the board uses a technique called __BACKTRACKING__. The idea of this technique is to try to guess a possible partial solution,
check if correct and proceed generating the remaining unsolved spots. When a spot cannot have a solution, then it backtracks, removing the previous generated step and going forward from there.

This apply to sudoku in the following way:
* pick an empty spot (a cell that doesn't have a solution yet)
* test all possible number for the cell, verifying that doesn't violate row, col and square rules
* when find a suitable solution for the cell, apply it to the board and proceed to the next cell
* after a couple of iterations, it's possible that there's no possible solution for a cell. At this point, the algorithm go back to the previous move and try another possible solution. And goes on
* when all the empty spots are solved, the algorithm terminate
* if no solution is found for the board, the puzzle is unsolvable

It's possible that a board has multiple solution. That should be avoided.
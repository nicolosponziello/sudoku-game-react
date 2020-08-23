import React, {Component} from "react";
import Board from "./Board";
import { solve, generatePuzzle, valid, checkSolution } from "../modules";

interface Props {
    boardSize: number;
}

interface State {
    board: Array<number | undefined>;
    initialBoard: Array<number | undefined>;
    initialIndexes: Array<number>;
}

export default class Game extends Component<Props, State> {

    constructor(props: Props){
        super(props);

        let newBoard = generatePuzzle(this.props.boardSize);
        this.state = {
            board: newBoard,
            initialBoard: newBoard,
            initialIndexes: this.calculateInitialIndexes(newBoard),
        }
    }

    calculateInitialIndexes = (board: Array<number | undefined>): Array<number> => {
        let indexes = [];
        for(let i = 0; i < board.length; i++){
            if(board[i] != undefined){
                indexes.push(i);
            }
        }
        return indexes;
    }

    changeValue = (cell: number, newValue: number):void => {
        let currentBoard = this.state.board;
        currentBoard[cell] = newValue;
        this.setState({board: currentBoard});
    }

    reset = (): void => {
        this.setState({board: this.state.initialBoard});
    }
    newGame = (): void => {
        let newBoard = generatePuzzle(this.props.boardSize);
        this.setState({
            board: newBoard,
            initialBoard: newBoard,
            initialIndexes: this.calculateInitialIndexes(newBoard)
        });
    }
    solve = (): void => {
        solve(this.state.board, this.props.boardSize);
        this.setState({board: this.state.board});
        
    }
    check = (): void => {
        if(checkSolution(this.state.board, this.props.boardSize)){
            alert("Correct!");
        }else{
            alert("Wrong!");
        }
    }
    render(){
        return (
            <>
                <div className="btns-control">
                    <button className="btn" onClick={this.solve}>solve</button>
                    <button className="btn" onClick={this.newGame}>new game</button>
                    <button className="btn" onClick={this.check}>
                    check
                    </button>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <Board boardSize={this.props.boardSize}
                            board={this.state.board}
                            initialSquares={this.state.initialIndexes}
                            changeValueHandler={this.changeValue}/>
                </div>
            </>
        );
    }
}
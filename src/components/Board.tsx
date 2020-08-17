import React from "react";
import Square from "./Square";
import { solve, generatePuzzle } from "../modules";

interface Props {
    boardSize: number;
}

interface State {
    board: Array<number | undefined>;
    boardSize: number;
}

class Board extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        
        this.state = {
            board: [],
            boardSize: props.boardSize,
        }


        let cellsNum:number = props.boardSize**4;
        for (let i = 0; i < cellsNum; i++){
            this.state.board.push(undefined);
        }

        this.changeCellValue = this.changeCellValue.bind(this);
    }

    changeCellValue (cell:number, value:number): void{
        let board = this.state.board;
        board[cell] = value;
        this.setState({board: board});
    }

    createBoard() {
        let board: Array<any>= [];
        for (let i = 0; i < this.state.boardSize**2; i++){
            let row = [];
            for (let j = 0; j < this.state.boardSize**2; j++){
                row.push(<Square key={i*this.state.boardSize**2+j} 
                                index={i*this.state.boardSize**2+j} 
                                editable={this.state.board[i*this.state.boardSize**2+j] != undefined}
                                changeValue={this.changeCellValue}
                                value={this.state.board[i*this.state.boardSize**2+j]} />);
            }
            row.push(< br/>);
            board.push(row);
        }
        return board;
    }
    reset = () => {
        let newBoard = [];
        let cellsNum:number = this.props.boardSize**4;
        for (let i = 0; i < cellsNum; i++){
            newBoard.push(undefined);
        }
        this.setState({board: newBoard});
    }

    render(){
        // i -> rows
        // j -> cols
        let board = this.createBoard();
        return (
            <React.Fragment>
                <div className="btns-control">
                    <button className="btn" onClick={() => {
                        if(solve(this.state.board, this.state.boardSize)){
                            this.setState({board: this.state.board});
                        }
                    }}>solve</button>
                    <button className="btn" onClick={() => {
                        this.setState({board: generatePuzzle(this.state.boardSize)});
                    }}>New game</button>
                </div>
                {board}
            </React.Fragment>
        );
    }
}

export default Board;
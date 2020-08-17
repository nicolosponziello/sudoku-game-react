import React from "react";
import Square from "./Square";
import { rootCertificates } from "tls";

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
                row.push(<Square key={i+j} 
                                value={this.state.board[i*this.state.boardSize**2 + j]} 
                                index={i*this.state.boardSize**2+j} 
                                changeValue={this.changeCellValue} />);
            }
            row.push(< br/>);
            board.push(row);
        }
        return board;
    }

    render(){
        // i -> rows
        // j -> cols
        let board = this.createBoard();
        console.log(board);
        return (
            <React.Fragment>
                {board}
            </React.Fragment>
        );
    }
}

export default Board;
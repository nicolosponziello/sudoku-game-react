import React from "react";
import Square from "./Square";

interface Props {
    boardSize: number;
}

interface State {
    board: Array<number>;
    boardSize: number;
    selectedCell?: number;
}

class Board extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        
        this.state = {
            board: new Array(),
            boardSize: props.boardSize,
            selectedCell: undefined
        }


        let cellsNum:number = props.boardSize**3;
        for (let i = 0; i < cellsNum; i++){
            this.state.board.push(i);
        }

        this.changeCellValue = this.changeCellValue.bind(this);
        this.selectCell = this.selectCell.bind(this);
    }

    changeCellValue (cell:number, value:number): void{
        let board = this.state.board;
        board[cell] = value;
        this.setState({board: board});
    }

    selectCell (cell:number): void{
        this.setState({selectedCell: cell});
        console.log(cell);
    }

    render(){
        return (
            <React.Fragment>
                {this.state.board.map( square => <Square
                                                    value={square}
                                                    selected={square == this.state.selectedCell}
                                                    changeValue={this.changeCellValue}
                                                    setSelected={this.selectCell}
                                                    />)}
            </React.Fragment>
        );
    }
}

export default Board;
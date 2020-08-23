import React from "react";
import Square from "./Square";


interface Props {
    boardSize: number;
    board: Array<number | undefined>;
    initialSquares: Array<number | undefined>;
    changeValueHandler: (cell: number, newValue: number) => void;
}

interface State {
    board: Array<number | undefined>;
    boardSize: number;
    result: boolean | undefined;
}

class Board extends React.Component<Props, State>{

    render(){
        return (
            <>
                <div style={{display: "grid", gridTemplateColumns: `repeat(${this.props.boardSize**2}, 0fr)`}}>
                    {this.props.board.map((el, idx) => <Square
                                key={Math.random()}
                                index={idx}
                                editable={this.props.initialSquares.includes(idx)}
                                changeValue={this.props.changeValueHandler}
                                value={el}
                                />
                    )}
                </div>
            </>
        );
    }
}

export default Board;
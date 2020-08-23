import React from "react";

interface Props {
    index: number;
    value: number | undefined;
    editable: boolean;
    changeValue: (cell:number, value:number) => void;
}
interface State {
    value:number;
}

class Square extends React.Component<Props, State> {

    validateInput(ev: React.KeyboardEvent): boolean{
        //var key = String.fromCharCode(ev.keyCode);
        //return event.charCode >= 48 && event.charCode <= 57
        if(ev.charCode >= 48 && ev.charCode <= 57){
            console.log("valid true");
            return true;
        }
        console.log("valid false");
        ev.preventDefault();
        return false;
    }

    render(){
        return (
            <input
                className={`square ${this.props.editable ? "default-cell" : ""}`}
                readOnly={this.props.editable}
                onKeyPress={ev => this.validateInput(ev)}
                onChange={(ev) => {
                    if(!isNaN(Number(ev.target.value))){
                        let value: number = Number(ev.target.value);
                        this.props.changeValue(this.props.index, value);
                    }
                }}
                value={this.props.value}
                />
        )
    }
}

export default Square;
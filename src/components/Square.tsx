import React from "react";

interface Props {
    index: number;
    value: number | undefined;
    changeValue: (cell:number, value:number) => void;
}
interface State {
    value:number;
}

class Square extends React.Component<Props, State> {

    render(){
        return (
            <input className="square"
                contentEditable="true"
                onChange={(ev) => {
                    let value: number = Number(ev.target.value);
                    this.props.changeValue(this.props.index, value);
                }} />
        )
    }
}

export default Square;
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
            <div className="square"
                onMouseEnter={() => console.log(this.props.index, this.props.value)}>
                {this.props.value}
            </div>
        )
    }
}

export default Square;
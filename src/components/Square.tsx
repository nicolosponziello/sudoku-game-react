import React from "react";

interface Props {
    value: number;
    changeValue: (cell:number, value:number) => void;
    selected: boolean;
    setSelected: (cell:number) => void;
}
interface State {
    value:number;
}

class Square extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
    }


    render(){
        return (
            <div className={`square ${this.props.selected ? "selected" : ""}`} 
                    onMouseEnter={() => this.props.setSelected(this.props.value)}
                    >

            </div>
        )
    }
}

export default Square;
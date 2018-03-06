import React, { Component } from 'react';

class Grid extends Component {
    static defaultProps = {
        type : ""   // start , end , path, block
    }

    getCssClass(type){
        let className = "grid"
        switch (type){
            case "start":
                className += " start";
                break;
            case "end":
                className += " end";
                break;
            case "path":
                className += " path";
                break;
            case "block":
                className += " block";
                break;
            default :
                className = "grid";
        }

        return className
    }

    render(){
        return(
            <div className={this.getCssClass(this.props.type)} type={this.props.type} style={this.props.style}></div>
        )
    }
}

export default Grid
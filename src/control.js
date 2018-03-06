import React, { Component } from 'react'

class Control extends Component {

    render(){
        return (
            <div className="control-panel">
                <button className="btn-confirm" onClick={this.props.onConfirmClick} >Draw Path</button>
                <button className="btn-clear" onClick={this.props.onClearClick} >Clear Path</button>
            </div>
        )
    }
}

export default Control
import React, { Component } from 'react'
import Control from './control'
import Board from './board'

import './App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.onConfirmClick.bind(this)
    this.onClearClick.bind(this)
    this.state = {
      boardSet : {
        row:12,
        col:20,
      },
      blocks : [[6,2],[6,3],[6,4],[6,5],[7,6]],
      start : [2,2],
      end : [18,10],
      path : [[2,4]]
    }
  }

  onConfirmClick(){

  }

  onClearClick(){

  }

  render() {
    return (
      <div className="estart-container">
        <Control onConfirmClick={this.onConfirmClick} onClearClick={this.onClearClick} />
        <Board 
          boardSet={this.state.boardSet} 
          blocks={this.state.blocks}
          start={this.state.start} 
          end={this.state.end} 
          path={this.state.path}
          />
      </div>
    );
  }
}

export default App;

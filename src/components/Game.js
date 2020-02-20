import React, { Component } from 'react';
import Box from './Box';

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            board: [0, 0, 0, 0, 0, 0, 0, 0, 0]

        }
    }

    tempFunc = (value) => {
        alert(value)
    }

  render() {
      var start = this.state.board.map((value, index) => {
          return (<Box
            index = {index}
            value = {value}
            tempFunc = {this.tempFunc}
          />)
      })
    return (
      <div>
            { start }
      </div>
    );
  }
}

export default Game;

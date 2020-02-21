import React, { Component } from 'react';
import Box from './Box';

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
          board: this.randomArray(),
          isWinner: "",
          counter: 0
        }
    }
    randomArray() {
      let tempArray = Array(9).fill(0)
        var winner = Math.floor(Math.random() * tempArray.length)
        var loser = Math.floor(Math.random() * tempArray.length)
        while(winner === loser){
            winner = Math.floor(Math.random() * tempArray.length)
        }
        tempArray[winner] = 1
        tempArray[loser] = 2
        return tempArray
    }

    tempFunc = (value) => {
        if(this.state.counter === 0){
            if (value === 1){
                this.setState({ isWinner: true})
                this.setState({ counter: 1})
            } else if (value === 2){
                this.setState({ isWinner: false})
                this.setState({ counter: 1})
            }
            return this.state.isWinner
        }
    }

  render() {
      // console.log(this.state.board);

      var start = this.state.board.map((value, index) => {
          return (<Box
            index = {index}
            value = {value}
            tempFunc = {this.tempFunc}
          />)
      })
    return (
      <div className = "centering">
        <div className = "organize">
            { start }
        </div>
            { this.state.isWinner === true &&
                <div>
                    You Win
                </div>
            }
            { this.state.isWinner === false &&
                <div>
                    You Lose
                </div>
            }
      </div>
    );
  }
}

export default Game;

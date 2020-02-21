import React, { Component } from 'react';
class Box extends Component {
  constructor(){
    super()
    this.state = {
      box: "Box",
      x: ""
    }
  }

    boxTemp = () => {
        this.props.tempFunc(this.props.value)
        this.changeBox()
    }

    changeBox() {
      if( this.props.value === 0){
        this.setState({ box: "boxDud" })
        this.setState({ x: "❌"})
      } else if (this.props.value === 1){
        this.setState({ box: "winner" })
        this.setState({ x: "🤠"})
    } else if (this.props.value === 2){
        this.setState({ box: "loser"})
        this.setState({ x: "☠️"})
    }
    }

  render() {
    return (
      <div className = {this.state.box} onClick = {this.boxTemp}> <span className = "ourCowboy">{this.state.x}</span>
      </div>
    );
  }
}

export default Box;

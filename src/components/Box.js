import React, { Component } from 'react';
class Box extends Component {

    boxTemp = () => {
        this.props.tempFunc(this.props.value)
    }

  render() {
    return (
      <div className = "Box" onClick = {this.boxTemp}>

      </div>
    );
  }
}

export default Box;

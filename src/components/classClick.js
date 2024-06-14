import React, { Component } from 'react'

export class classClick extends Component {
    clickHandler(){
        console.log("class has clicked Button ");
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click me</button>
      </div>
    )
  }
}

export default classClick

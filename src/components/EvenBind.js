import React, { Component } from "react";

class EvenBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "helo",
    };
  }
  clickHandler() {
    this.setState({
      message: "good Bye",
    });
    console.log(this);
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>      */}
        <button onClick={() => this.clickHandler()}>Click</button>
      </div>
    );
  }
}

export default EvenBind;

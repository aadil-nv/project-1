import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
        // this.setState({
        //     count: this.state.count +1
        // },()=>{console.log('callback value',this.state.count)})
        this.setState(prevState=>({
            count : prevState.count + 1
        }))
        console.log(this.state.count);
    }
    decrement(){
       
        this.setState(prevState=>({
            count : prevState.count - 1
        }))
        console.log(this.state.count);
    }
    decrement(){
       
        this.setState(prevState=>({
            count : prevState.count = 0
        }))
        console.log(this.state.count);
    }

    
  render() {
    return (
      <div>
        <div>count -{this.state.count}</div>
        <button onClick={()=> this.increment()}>Increment</button>
        <button onClick={()=> this.decrement()}>decrement</button>
        <button onClick={()=> this.decrement()}>clear</button>


      </div>
    )
  }
}

export default Counter

import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"welcome visitor"
        }
    }
    ChangeMessage(){
        this.setState({
            message:"Thankyou"
        })
    }
    render(){
        return (
            <div>
                <h4>{this.state.message}</h4>
                <button onClick={()=> this.ChangeMessage()} >Subscribe</button>
            </div>
        ) 
           }
}
export default Message
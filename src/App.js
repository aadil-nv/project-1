import logo from './logo.svg';
import './App.css';
import Greet from './components/greeting';
import Welcome from './components/classGreeting';
import React ,{ Component } from 'react';
import Hello from './components/hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/classClick';
import EvenBind from './components/EvenBind';
import ParentComponent from './components/ParentComponent';
import Hooks from './Hooks';


class App extends Component {
  render(){
    return(
      <div className='App'>
       
        <Hooks/>
        {/* <ParentComponent/> */}
        {/* <EvenBind/> */}
        {/* <ClassClick/> */}
        {/* <FunctionClick /> */}
        {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Greet name="arjun" heroName="batMan"/>
        <p>This is for childrens</p>
        
        <Greet name="moidheen" heroName="superMan" />
        <button>download</button>
        <Greet name ="ameen" heroName="ironMan"/> */}
        {/* <Welcome name="aadil" heroName="Mother"/> */}
        {/* <Hello /> */}
    </div>
    );
  }
}


export default App;

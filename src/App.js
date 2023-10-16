/* eslint-disable no-unused-expressions */
import './App.css';
import  React, {useState} from 'react';
import Students from './Students';
import Users from './Users';
import Profiles from './Profiles';
import Login from './FormLogin';

class App extends React.Component{
  constructor(){
    super();
    console.log("hello")
    this.state = {
      count : 0
    }
  }
  componentDidUpdate(preProps, preState){
    console.log("components did update call hua",preState.count)
    preState.count===this.state.count? alert("both are same"):null;
  }
  render(){
    return(
      <div>
        <h1>component to update{this.state.count}</h1>
        <button onClick={()=> this.setState({count: 1})}>click here to update</button>
      </div>
    );
  }
}
export default App;
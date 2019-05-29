import React, { Component } from 'react';
import MyHeader from './MyHeader';
import './App.scss';

/* App.jsx */
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }



  render(){
    return(
      <div className="App">
        <MyHeader />
      </div>
    )
  }
}

export default App;

import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';




class App extends Component {
  state = {
    username: 'supermax',
  }

  inputChangeHeandler = (event) => {
    this.setState({
      username: event.target.value
      }
    );
  }

  render() {
    return (
      <div className="App">

        <UserInput changed={this.inputChangeHeandler} currentName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="milos"/>
      </div>
    );
  }
}
export default App;

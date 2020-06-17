import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      {name: 'Milos'},
      {name: 'Gole'}
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value},
        {name: 'Mare'}
      ]
    })
  }

  render () {
   return (
    <div className="App">
    <h1>Ide React Gas</h1>
    <button onClick={this.togglePersonsHandler}>Change Name</button>
    { this.state.showPersons ?
      <div>
        <Person
          name={this.state.persons[0].name}
          click={this.switchNameHandler}
          change={this.changeNameHandler}/>
        <Person
          name={this.state.persons[1].name}>This is best lengauge
        </Person>
      </div> : null
    }
    <UserInput/>
    <UserOutput userName="milos"/>
    <UserOutput userName="milos"/>
  </div>
  );
 }
}
export default App;

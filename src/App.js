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
      {name: 'Gole'},
      {name: 'Jon'}
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
    let person = null;

    if(this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name}/>
          })}
        </div>
      )
    }
   return (
    <div className="App">
    <h1>Ide React Gas</h1>
    <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
    {person}
    <UserInput change={this.changeNameHandler}/>
    <UserOutput userName={this.state.persons[0].name}/>
    <UserOutput userName="milos"/>
  </div>
  );
 }
}
export default App;

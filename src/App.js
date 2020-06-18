import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Milos'},
      {id: '2',name: 'Gole'},
      {id: '3',name: 'Jon'}
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

  render () {
    let person = null;

    if(this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              key={person.id}
              change={(event) => this.changeNameHandler( event, person.id )}
              />
          })}
        </div>
      )
    }
   return (
    <div className="App">
    <h1>Ide React Gas</h1>
    <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
    {person}
    <UserInput />
    <UserOutput/>
    <UserOutput userName="milos"/>
  </div>
  );
 }
}
export default App;

import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './ValidationComponent/Validation';
import Char from './Char/Char';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};

    &:hover {
      background-color: ${props => props.alt ? 'green' : 'red'};
  }
`;

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Milos'},
      {id: '2',name: 'Gole'},
      {id: '3',name: 'Jon'}
    ],
    showPersons: false,
    inputUser: ''
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

  inputChangeHandler = (event) => {
    this.setState({
      inputUser: event.target.value
    });
  }

  removedChar = (index) => {
    const text = this.state.inputUser.split('');
    text.splice(index,1);
    const updateText = text.join('');

    this.setState({inputUser:updateText})
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

    const charList = this.state.inputUser.split('').map( (ch, index) => {
      return <Char
      character={ch}
      key={index}
      clicked={() => this.removedChar(index)}
      />
    });

   return (

    <div className="App">
    <h1>Ide React Gas</h1>
    <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
      Toggle Persons
    </StyledButton>
    {person}
    <UserInput />
    <UserOutput userName="milos" />
    <UserOutput userName="milos" />
    <hr/>
    <input type="text" onChange={this.inputChangeHandler} value={this.state.inputUser} />
    <p>{this.state.inputUser}</p>
    <Validation inputLength={this.state.inputUser.length}/>
    {charList}
  </div>

  );
 }
}
export default App;

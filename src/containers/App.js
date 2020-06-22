import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import Validation from '../components/ValidationComponent/Validation';
import Char from '../components/Char/Char';
import withClasses from '../hoc/WithClass';

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
          <Person
            click={this.deletePersonHandler}
            changed={this.changeNameHandler}
            persons={this.state.persons}
          />
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
    <div className={classes.App}>
      <Cockpit
        click={this.togglePersonsHandler}
        alt={this.state.showPersons}
      />
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

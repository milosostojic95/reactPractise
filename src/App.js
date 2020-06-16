import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [statePersons, setStatePersons] = useState ({
    persons: [
      {name: 'Milos'},
      {name: 'Gole'}
    ]
  });

  const switchNameHandler = () => {
    setStatePersons({
      persons: [
        {name: 'Milos'},
        {name: 'Mare'}
      ]
    });
  }

  return (
    <div className="App">
      <h1>Ide React Gas</h1>
      <button onClick={switchNameHandler}>Change Name</button>
      <Person name={statePersons.persons[0].name}/>
      <Person name={statePersons.persons[1].name}>This is best lengauge</Person>
    </div>
  );
}

export default App;

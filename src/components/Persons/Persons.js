import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  shouldComponentUpdate(nextProps,nextState) {
    if(nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return this.props.persons.map((person, index)=> {
      return <Person
        click={() => this.props.click(index)}
        name={person.name}
        key={person.id}
        changed={(event) => this.props.changed( event, person.id )}
      />
    })
  }
}




export default Persons;

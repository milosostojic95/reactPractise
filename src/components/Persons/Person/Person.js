import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
// aux moze da se koristi mesto ovog stylediva, kao wrapper


class Person extends Component {
  render () {
    return (
      <Aux>
        <p
          onClick={this.props.click}>
            This hello world! I am {this.props.name}, best developer of {Math.floor(Math.random()*30)} developers
        </p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  clicked: PropTypes.func
};

export default withClass(Person,classes.Person);

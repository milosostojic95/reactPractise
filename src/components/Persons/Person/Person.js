import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';
// aux moze da se koristi mesto ovog stylediva, kao wrapper


class Person extends Component {

  componentDidMount () {
    this.inputElement.focus();
  }

  render () {
    return (
      <Aux>
        <AuthContext.Consumer>
          {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
        </AuthContext.Consumer>
        <p
        id='i1'
          onClick={this.props.click}>
            This hello world! I am {this.props.name}, best developer of {Math.floor(Math.random()*30)} developers
        </p>
        <input
          id='i2'
          type="text"
          ref={(inputEl) => {this.inputElement = inputEl}}
          onChange={this.props.changed} value={this.props.name}/>
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

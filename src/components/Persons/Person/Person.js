import React, {Component} from 'react';
import styled from 'styled-components';
import Aux from '../../../hoc/Auxiliary';
// aux moze da se koristi mesto ovog stylediva, kao wrapper
const StyledDiv = styled.div`
  width: 40%;
  margin: 16px auto;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  text-align: center;
  padding: 1rem 0;
`

class Person extends Component {
  render (){
    return (
      <StyledDiv>
        <p
          onClick={this.props.click}>
            This hello world! I am {this.props.name}, best developer of {Math.floor(Math.random()*30)} developers
        </p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </StyledDiv>
    );
  }
}

export default Person;

import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 40%;
  margin: 16px auto;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  text-align: center;
  padding: 1rem 0;
`

const Person = (props) => {
  const style = {
    '@media (min-width: 500px)' : {
      width: '450px',
      textAlign: 'center',
      margin: '0 auto'
    }
  }
return (
  <StyledDiv>
    <p onClick={props.click}>This hello world! I am {props.name}, best developer of {Math.floor(Math.random()*30)} developers</p>
    <input type="text" onChange={props.change} value={props.name}/>
  </StyledDiv>
)
}

export default Person;

import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${ props => props.alt ? 'red' : 'green'};

    &:hover {
      background-color: ${ props => props.alt ? 'green' : 'red'};
  }
`;


const cockpit = (props) => {
  return (
    <div>
      <h1>Ide React Gas</h1>
        <StyledButton alt={props.alt.toString()} onClick={props.click}>
          Toggle Persons
        </StyledButton>
    </div>
  );
}
export default cockpit;

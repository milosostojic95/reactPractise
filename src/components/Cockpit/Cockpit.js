import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import AuthContext from '../../context/auth-context';

const StyledButton = styled.button`
  background-color: ${ props => props.alt ? 'red' : 'green'};

    &:hover {
      background-color: ${ props => props.alt ? 'green' : 'red'};
  }
`;

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js clenup work in useEfect]')
    }
  },[])

  return (
    <div>
      <h1>Ide React Gas</h1>
        <StyledButton
          ref={toggleBtnRef}
          alt={props.alt.toString()} onClick={props.click}>
          Toggle Persons
        </StyledButton>
        <AuthContext.Consumer>
          {(context) => <button onClick={context.login}>Log in</button>}
        </AuthContext.Consumer>
    </div>
  );
}
export default React.memo(cockpit);

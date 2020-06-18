import React from 'react';

const char = (props) => {
  const style = {
    display: 'inline-block',
    textAlign: 'center',
    border: '1px solid black',
    padding: '16px',
    margin: '16px'
  }
  return (
    <div style={style} onClick={props.clicked}>
      {props.character}
    </div>
  )
}

export default char;

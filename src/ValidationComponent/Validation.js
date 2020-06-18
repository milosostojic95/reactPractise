import React from 'react';
const validation = (props) => {
  let inputLength = 'text is long enough';
  if( props.inputLength <= 5) {
    inputLength = 'text too short'
  }
  return (
    <div>
      <p>{inputLength}</p>
    </div>
  )
};
export default validation;

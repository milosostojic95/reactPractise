import React from 'react';
const userInput = (props) => {
  return (
    <div>
      <br></br>
      <input type="text" onChange={props.changed} value={props.currentName}/>
    </div>
  );
}

export default userInput;
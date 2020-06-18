import React from 'react';

const Person = (props) => {
return (
  <div>
    <p onClick={props.click}>This hello world! I am {props.name}, best developer of {Math.floor(Math.random()*30)} developers</p>
    <input type="text" onChange={props.change} value={props.name}/>
  </div>
)
}

export default Person;

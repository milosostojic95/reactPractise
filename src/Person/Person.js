import React from 'react';

const Person = (props) => {
return (
  <div>
    <p>This hello world! I am {props.name}, best developer of {Math.floor(Math.random()*30)} developers</p>
    <p>{props.children}</p>
  </div>
)
}

export default Person;

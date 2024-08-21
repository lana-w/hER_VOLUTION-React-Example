import React from 'react' // gets React in the file

// Function that returns html
// THIS IS A COMPONENT
function Welcome(props){
    return <h1>Hello, {props.name}! You are {props.age} years old. </h1>;
}

// makes function available to be called in other files
export default Welcome; 
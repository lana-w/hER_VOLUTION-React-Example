import React from 'react'
import {useState} from 'react'

function Form(){
// State management
const [name, setName] = useState('')
const [inputtedName, setInputtedName] = useState('')

const handleChange = (event) => {
    setName(event.target.value);
    setInputtedName(name.toUpperCase())
}

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted name: ', inputtedName);
    document.getElementById("my_name").innerHTML = inputtedName;
}


// Return HTML
return(
    <>
    <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={handleChange} />

        <button type='submit'> Submit </button>

    </form>
    <h1 id="my_name"> </h1>
    </>
);
}

export default Form;
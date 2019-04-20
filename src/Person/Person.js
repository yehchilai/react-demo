import React from 'react';
import Radium from 'radium';
import './Person.css'

const person = (props) => {
    const styleInline = {
        '@media (min-width: 450px)':{
            width: '450px'
        }
    };

    // return <p>I'm a person.I am {Math.floor(Math.random() * 30)} years old.</p>
    return (
        <div className='Person' style={styleInline}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default Radium(person);
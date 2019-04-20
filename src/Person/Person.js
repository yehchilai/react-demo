import React from 'react';
import classes from './Person.css'

const person = (props) => {

    const rnd = Math.random();
    console.log(rnd);
    if(rnd > 0.7){
        throw new Error('There is something wrong.');
    }

    // return <p>I'm a person.I am {Math.floor(Math.random() * 30)} years old.</p>
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default person;
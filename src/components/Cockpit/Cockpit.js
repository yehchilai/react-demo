import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // http request.......
        const timer = setTimeout(()=>{
            alert('Data has udpated...');
        }, 1000);

        return () => {
            clearTimeout(timer); 
            console.log('[Cockpit.js] cleanup works in useEffect.')
        }
    }, []);

    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect');

        return () => {
            console.log('[Cockpit.js] cleanup works in 2nd useEffect.')
        }
    });

    // Can have multiple useEffcet functions
    // useEffect(() => {
    //     // console.log('[Cockpit.js] useEffect');
    //     // http request.......
    //     setTimeout(()=>{
    //         alert('Persons has udpated...');
    //     }, 1000);
    // }, [props.persons]);

    // const classes = ['red', 'bold'].join(' '); // 'red bold'
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.red;
    }

    if (props.showPersons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }

    if (props.showPersons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, this is a react project</h1>
            <p className={assignedClasses.join(' ')}>This is really working!!!</p>
            {/* Not recommended because of less efficient */}
            <button className={btnClass}
                onClick={props.clicked}>Switch Name</button>
        </div>
    );

}

export default cockpit;
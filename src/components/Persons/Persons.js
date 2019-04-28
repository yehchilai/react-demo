import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    // there is no state in this component so we do not need this function
    // static getDerivedStateFromProps(props, state){
    //     return state
    // }

    // This is easily used incorrectly so will be removed in the future. 
    // componentWillReceiveProps(props){
    //     console.log('[Persons.js componentWillReceivedProps]')
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate')
    //     // Warning!! In this case, it compares two pointer(array reference), not the actual values in the array.
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.clicked !== this.props.clicked ||
    //         nextProps.changed !== this.props.changed) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    //     // return true;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return { message: 'snapshot.....' }
    }

    // This is easily used incorrectly so will be removed in the future.
    // componentWillUpdate() {
    //     console.log('[Persons.js] componentWillUpdate')
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persons] rendering...');

        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id} />
        });
    }

}

export default Persons;
import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

  state = {
    persons: [
      { id: 'ldfjk', name: 'Mark', age: 30 },
      { id: 'ewfew', name: 'Marc', age: 40 },
      { id: 'opjpj', name: 'Mike', age: 50 }
    ],
    otherState: 'Will merge when using setState',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Always using updating state immutably
    const person = {
      ...this.state.persons[personIndex]
    };
    // (Alternative) const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const personsUpdate = [...this.state.persons];
    personsUpdate[personIndex] = person;

    this.setState({ persons: personsUpdate });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    // const personsUpdate = this.state.persons; // bad. Do not use reference
    const personsUpdate = [...this.state.persons] // (ES6) use saperate operator. Copy before modify (immutably)
    // const personsUpdate = this.state.persons.slice()// (Old ) Optional 
    personsUpdate.splice(personIndex, 1);
    this.setState({ persons: personsUpdate });
  }

  render() {

    let persons = null;


    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />;

    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons} 
          clicked = {this.togglePersonHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;

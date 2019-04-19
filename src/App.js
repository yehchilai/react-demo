import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

    const styleInline = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, this is a react project</h1>
        <p>This is really working!!!</p>
        {/* Not recommended because of less efficient */}
        <button style={styleInline}
          onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;

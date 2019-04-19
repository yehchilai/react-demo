import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Mark', age: 30 },
      { name: 'Marc', age: 40 },
      { name: 'Mike', age: 50 }
    ],
    otherState: 'Will merge when using setState',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // Do not do this: this.state.persons[0].name = 'Marry';
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Marc', age: 40 },
        { name: 'Mike', age: 60 }
      ]
    });
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
    this.setState({persons: personsUpdate});
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
          {this.state.persons.map( (person, index) => {
            return <Person
                    click = {() => this.deletePersonHandler(index)}
                    name = {person.name}
                    age = {person.age}/>
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

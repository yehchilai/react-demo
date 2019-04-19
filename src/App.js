import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Mark', age: 30},
      {name: 'Marc', age: 40},
      {name: 'Mike', age: 50}
    ],
    otherState: 'Will merge when using setState',
    showPersons: false
  }

  switchNameHandler = (newName) =>{
    // console.log('Was clicked!');
    // Do not do this: this.state.persons[0].name = 'Marry';
    this.setState({
      persons: [
        {name: newName, age: 30},
        {name: 'Marc', age: 40},
        {name: 'Mike', age: 60}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Mark', age: 30},
        {name: event.target.value, age: 40},
        {name: 'Mike', age: 50}
      ]
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
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

    if(this.state.showPersons) {
      persons = (
        <div>
            <Person name={this.state.persons[0].name} 
                    age={this.state.persons[0].age}/>
            <Person click={this.switchNameHandler.bind(this, 'MARK!!')}
                    changed={this.nameChangedHandler}
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}>My hobbies: Racing</Person>
            <Person name={this.state.persons[2].name} 
                    age={this.state.persons[2].age}/>
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

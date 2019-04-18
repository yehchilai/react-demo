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
    otherState: 'Will merge when using setState'
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

  render() {
    return (
      <div className="App">
        <h1>Hi, this is a react project</h1>
        <p>This is really working!!!</p>
        {/* Not recommended because of less efficient */}
        <button onClick={() => this.switchNameHandler('## MARK ##')}>Switch Name</button>

        <Person name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
        {/* recommended using bind */}
        <Person click={this.switchNameHandler.bind(this, 'MARK!!')}
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} 
                age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;

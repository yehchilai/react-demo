import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, this is a react project</h1>
        <p>This is really working!!!</p>
        <Person name='Mark' age='30'/>
        <Person name='Marc' age='40'>My hobbies: Racing</Person>
        <Person name='Mike' age='50'/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary'
import withClass from '../hoc/withClassOther'

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    // also can setup the initial state
    // this.state = {};
  }

  state = {
    persons: [
      { id: 'ldfjk', name: 'Mark', age: 30 },
      { id: 'ewfew', name: 'Marc', age: 40 },
      { id: 'opjpj', name: 'Mike', age: 50 }
    ],
    otherState: 'Will merge when using setState',
    showPersons: false,
    showCockpit: true,
    changeCount: 0
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    return state
  }

  // This life cycle may be removed in the future because it is easily misused.
  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    // if return false, it won't update the components.
    return true
  }
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

    // Bad way to update the state
    // this.setState({ persons: personsUpdate, 
    //   changeCount: this.state.changeCount +1 });

    // Correct way to update state
    this.setState((prevState, prevProps) => {
      return {
        persons: personsUpdate,
        changeCount: prevState.changeCount + 1
      }
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
    this.setState({ persons: personsUpdate });
  }

  render() {
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />;

    }

    return (
      <Aux>
        {/* // <WithClass classes={classes.App}> */}
        <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
        {this.state.showCockpit ? (<Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler} />) : null}
        {persons}
        {/* // </WithClass> */}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);

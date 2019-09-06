import React, { Component } from 'react';
// import React, { useState } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Person from '../components/Persons/Person/Person';

import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component {

  constructor(props) {

    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: '001', name: 'Kazimiras', age: 26},
      {id: '002', name: 'Andrius', age: 25},
      {id: '003', name: 'Lukas', age: 25}
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {

    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    // const person = Object.assign((), this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    console.log('[App.js] render');

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
      );

      btnClass = classes.red;
    }

    return (

        <div className={classes.App}>
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />
          {persons}
        </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Header text with \' symbol'));
  }
}

export default App;


// const app = (props) => {

//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {name: 'Kazimiras', age: 26},
//       {name: 'Andrius', age: 25},
//       {name: 'Lukas', age: 25}
//     ]
//   });

//   const [otherState, setOtherState] = useState('some other state');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     setPersonsState({persons: [
//         {name: 'Casmir', age: 26},
//         {name: 'Andrew', age: 25},
//         {name: 'Luke', age: 25}
//       ]
//     });
//   }

//   return (
//     <div className="App">
//       <h1>Header text</h1>
//       <p>Paragraph text</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My hobbies: Hiking</Person>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Movies</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My hobbies: Music</Person>
//     </div>
//   );
// }

// export default app;
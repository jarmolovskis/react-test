import React, { Component } from 'react';
// import React, { useState } from 'react';
import Radium, { StyleRoot } from 'radium';

import './App.css';
import Person from './Person/Person';



class App extends Component {

  state = {
    persons: [
      {id: '001', name: 'Kazimiras', age: 26},
      {id: '002', name: 'Andrius', age: 25},
      {id: '003', name: 'Lukas', age: 25}
    ],
    showPersons: false
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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightGreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              key={person.id}
            >My hobbies: Hiking</Person>
          })}

          </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'LightCoral',
        color: 'black'
      }
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
      <StyleRoot>
        <div className="App">
          <h1>Header text</h1>
          <p className={classes.join(' ')}>Paragraph text</p>
          <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

          {persons}

        </div>
      </StyleRoot>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Header text with \' symbol'));
  }
}

export default Radium(App);


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
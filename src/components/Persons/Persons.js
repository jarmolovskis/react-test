import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

const persons = (props) => {

	console.log('[Persons.js] rendering');

	return props.persons.map((person, index) => {
	    return (
		    <ErrorBoundary key={person.id}>
		      <Person
		        name={person.name}
		        age={person.age}
		        click={() => props.clicked(index)}
		        changed={(event) => props.changed(event, person.id)}
		      >My hobbies: Hiking</Person>
		    </ErrorBoundary>
	    );
	});
}

export default persons;
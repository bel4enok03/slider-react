import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
	const [person, setPerson] = useState(0);
	const { id, name, description, age, image } = data[person];

	const previousPerson = () => {
		setPerson((person) => {
			person--;
			if (person < 0) {
				return data.length - 1;
			}
			return person;
		});
	};

	const nextPerson = () => {
		setPerson((person) => {
			person++;
			if (person > data.length - 1) {
				person = 0;
			}
			return person;
		});
	};

	return (
		<div>
			<div className="container">
				<img src={image} width="250px" alt="person" />
			</div>

			<div className="container">
				<h1>{id} - {name}</h1>
			</div>

			<div className="container">
				<p>{description}</p>
			</div>

			<div className="container">
				<p>{age} years old</p>
			</div>

			<div className="btn container">
				<button onClick={previousPerson}>Previous</button>
				<button onClick={nextPerson}>Next</button>
			</div>
		</div>
	);
}

export default App;

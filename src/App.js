import React, { Component } from 'react';

import { CardList } from './component/card-list/card-list.component.jsx';
import { SearchBox } from './component/search-box/search-box.component.jsx';

import './App.css';

class App extends Component {
	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ monsters: users }));
		//* we are fetching users from this url when the component mounts, then fetch returns a promise, we catch it with then and we translate the response into a readable js object, then we set the state to the users we just received.
	}

	handleChange(e) {
		this.setState({ searchField: e.target.value });
	}
	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		); //* this works because whenever we call setState react rerender this whole component
		return (
			<div className='App'>
				<h1>Monsters Rolodex</h1>
				<SearchBox
					placeholder='Search monsters'
					handleChange={this.handleChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;

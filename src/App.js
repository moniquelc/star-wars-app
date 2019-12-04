import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state={
			characters: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		const urls= [
			'https://swapi.co/api/people/?page=1',
			'https://swapi.co/api/people/?page=2',
			'https://swapi.co/api/people/?page=3',
			'https://swapi.co/api/people/?page=4',
			'https://swapi.co/api/people/?page=5',
			'https://swapi.co/api/people/?page=6',
			'https://swapi.co/api/people/?page=7',
			'https://swapi.co/api/people/?page=8',
			'https://swapi.co/api/people/?page=9'
		]
		
		Promise.all(urls.map(url => {
			return fetch(url).then(resp => resp.json())
		})).then(results => {
			const fullResults = results.reduce((acc, item) => {
		    	return acc.concat(item.results);
			}, []);
			this.setState({characters: fullResults});
			})
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

 	render() {
		const { characters, searchfield } = this.state;
 		const filteredCharacters = characters.filter(character => {
			return character.name.toLowerCase().includes(searchfield.toLowerCase());
		})
	    return !characters.length ?
		<h1 className='tc yellow'>Loading</h1> :
		(
	      <div className='tc'>
	        <h1 className='f1 yellow'> Star Wars Characters Guide</h1>
	        <SearchBox searchChange={this.onSearchChange}/>
	        <p></p>
	        <Scroll>
	        	<CardList characters={filteredCharacters}/>
	        </Scroll>
	      </div>
	    );
 	}
}

export default App;

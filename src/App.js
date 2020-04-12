import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
	const APP_ID = '5d7f9c13';
	const APP_KEY = '4c5f5c3d9512330396b5fee0f1a5ff0f';

	const [ recipes, setRecipe ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ query, setQuery ] = useState('');

	useEffect(
		() => {
			getRecipes();
		},
		[ query ]
	);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/${query}?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data = await response.json();
		setRecipe(data.hits);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};

	return (
		<div className="App">
			<form onSubmit={getSearch} className="search-from">
				<input className="search-bar" type="text" value={search} onChange={updateSearch} />
				<button className="search-button" rypeof="Submit">
					Search
				</button>
			</form>
			<div className="recipies">
				{recipes.map((recipe) => (
					<Recipe
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						image={recipe.recipe.image}
						key={recipe.recipe.label}
						ingredients={recipe.recipe.ingredients}
					/>
				))}
			</div>
		</div>
	);
};

export default App;

import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
	const APP_ID = 'e4b50c46';
	const APP_KEY = '8ea6cc972038bdec3bd1f83280554334';

	const [ recipes, setRecipe ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ query, setQuery ] = useState('chicke');

	useEffect(
		() => {
			getRecipes();
		},
		[ query ]
	);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=e4b50c46&app_key=8ea6cc972038bdec3bd1f83280554334&from=0&to=3&calories=591-722&health=alcohol-free`
		);
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
			<form onSubmit={getSearch} className="search-form">
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
						key={recipe.recipe.source}
						ingredients={recipe.recipe.ingredients}
					/>
				))}
			</div>
		</div>
	);
};

export default App;

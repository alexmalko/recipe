import React from 'react';
import './App.css';

const Recipe = ({ title, calories, image, ingredients, key }) => {
	return (
		<div className="recipe">
			<h1>{title}</h1>
			<ol>{ingredients.map((ingredient) => <li>{ingredient.text}</li>)}</ol>
			<p>{calories}</p>
			<img className="image" src={image} alt="" />
		</div>
	);
};

export default Recipe;

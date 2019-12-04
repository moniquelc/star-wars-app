import React from 'react';

const Card = ({ name, gender, height, mass, hair_color, skin_color, birth_year }) => {
	return(
		<div className='tc bg-mid-gray dib outline w-20 pa3 mr2 ma3 br2 grow shadow-3'>
			<h2 className='yellow'>{name}</h2>
			<p>Gender: {gender}</p>
			<p>Height: {height}</p>
			<p>Mass: {mass}</p>
			<p>Hair color: {hair_color}</p>
			<p>Skin color: {skin_color}</p>
			<p>Birth year: {birth_year}</p>
		</div>
	)
}

export default Card;
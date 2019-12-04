import React from 'react';
import Card from './Card';

const CardList = ({characters}) => {
	return(
		<div>
			{
				characters.map((user, i) => {
					return(
						<Card
							key={i} 
							name={characters[i].name} 
							gender={characters[i].gender}
							height={characters[i].height}
							mass={characters[i].mass}
							hair_color={characters[i].hair_color}
							skin_color={characters[i].skin_color}
							birth_year={characters[i].birth_year}
						/>
					);
				})
			}
		</div>
	)
}

export default CardList;
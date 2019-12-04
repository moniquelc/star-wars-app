import React from 'react';

const SearchBox = ({searchChange}) => {
	return(
		<div className='pa2'>
			<input 
				className='f3 tc yellow bg-dark-gray  shadow-3 grow br2 ba b--yellow pointer' 
				type='search' 
				placeholder='search character'
				onChange={searchChange}
			 />
		 </div>
	);
}

export default SearchBox;
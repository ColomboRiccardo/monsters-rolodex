import React from 'react';

import './search-box.styles.css';

export const SearchBox = (
	{ placeholder, handleChange } //*  const {placeholder, handleChange} = props
) => (
	<input
		className='search'
		type='search'
		placeholder={placeholder}
		onChange={handleChange}
	/>
);

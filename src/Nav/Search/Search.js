import React from 'react';
import './Search.css';

const Search = (props) => {
	return (
		<div className="Search">
			<input type="search" placeholder="Search" />
			<button type="submit"><img src="https://icon-library.net//images/magnifying-glass-icon-png/magnifying-glass-icon-png-5.jpg" alt="Search symbol" /></button>
		</div>
	)
};

export default Search;
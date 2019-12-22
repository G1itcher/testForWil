import React from 'react';
import './Nav.css';
import Search from './Search/Search';
import Page from './Page/Page';
import Filter from './Filter/Filter';
import Sorter from './Sorter/Sorter';

const Nav = (props) => {
	// window.addEventListener('click', function(e){   
	// 	if (document.getElementById('clickbox').contains(e.target)){
	// 		// Clicked in box
	// 	} else{
	// 		// Clicked outside the box
	// 	}
	// });

	return (
		<nav className="Nav">
			<Search />
			<Page page={props.page} pageMax={props.pageMax} />
			<Filter />
			<Sorter />
		</nav>
	)
};

export default Nav;
import React, { useState, useRef, useEffect } from 'react';
import './Sorter.css';

const Sorter = (props) => {
	const [ sorterDrawerState, setSorterDrawerState ] = useState({
		open: false
	});

const useOutsideAlerter = ref => {
	function handleClickOutside(event) {
		if (ref.current && !ref.current.contains(event.target)) {
			closeSorterDrawer;
		}
	}

	useEffect(() => {
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});
}

const toggleSortDrawerHandler = () => {
	if (sorterDrawerState.open) {
		// The Sort Drawer is open, so let's close it
		closeSorterDrawer;
	} else {
		//The Sort Drawer is closed, so let's open it
		openSorterDrawer;
	}
}

const openSorterDrawer = () => {
	setSorterDrawerState({ open: true });
}

const closeSorterDrawer = () => {
	setSorterDrawerState({ open: false });
}

	const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

	return (
		<details ref={wrapperRef} className="Sorter" open={sorterDrawerState.open}><summary onClick={toggleSortDrawerHandler}>⇵ Sort</summary>
			<ul>
				<div className="arrow active">←</div>
				<div className="arrow highlight">←</div>
				<li>
					<ol>
						<li><a href="?sort=a-z">A</a></li>
						<li><a href="?sort=z-a">Z</a></li>
					</ol>
				</li>
				<li>
					<ol>
						<li><a href="?sort=new">New</a></li>
						<li><a href="?sort=old">Old</a></li>
					</ol>
				</li>
				<li>
					<ol>
						<li><a href="?sort=short">Short</a></li>
						<li><a href="?sort=long">Long</a></li>
					</ol>
				</li>
			</ul>
		</details>
	)
};

export default Sorter;
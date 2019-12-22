import React from 'react';
import './Page.css';
import PageLink from './PageLink';

const Page = (props) => {
	let pages = [];
	console.log(props.pageMax);
	for ( let i = 1; i <= props.pageMax; i++ ) {
		let className =	i === 1 ? "first"
			: i === props.page - 1 ? "previous"
			: i === props.page ? "current"
			: i === props.page + 1 ? "next"
			: i === props.pageMax ? "last"
			: i;
		pages.push(<li className={className}><PageLink page={i} className={className} /></li>);
	}
	return (
		<div className="Page">
			<ol className="Pages">
				{pages}
			</ol>
		</div>
	);
};

export default Page;
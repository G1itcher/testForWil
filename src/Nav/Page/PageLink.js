import React from 'react';

const PageLink = (props) => {
	return (
		<div className="PageLink">
			<a>{props.page}</a>
		</div>
	);
};

export default PageLink;
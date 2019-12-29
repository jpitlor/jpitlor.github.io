import React from 'react';

import useReadme from '../utils/useReadme';

const Repository = ({data: {description, homepageUrl, url, object: {text: readme}}}) => {
	const {name} = useReadme(readme);

	return (
		<div>
			<h3>{name}</h3>
			
		</div>
	);
};

export default Repository;

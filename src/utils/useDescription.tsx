import React from "react";

const useDescription = description => {
	switch (description.nodeType) {
		case 'document':
			return (
				<div>
					{useDescription(description.content)}
				</div>
			);
		case 'unordered-list':
			return (
				<ul>
					{description.content.map(content => (
						<li>{useDescription(content)}</li>
					))}
				</ul>
			);
		case 'list-item':
			return (
				<li>
					{description.content.map(useDescription)}
				</li>
			);
		case 'paragraph':
			return (
				<p>
					{description.content.map(useDescription)}
				</p>
			);
		case 'text':
			return description.value;
		default:
			return '';
	}
};

export default useDescription;

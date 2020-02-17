import * as React from 'react';
import styled from "styled-components";
import marked from "marked";

import useReadme from '../utils/useReadme';

const Card = styled.div`
	border: 1px solid black;
	margin: 0.5rem;
	padding: 0 1rem;
	display: flex;
	flex-direction: column;
`;

const CardTitle = styled.h2`
	margin: 1rem 0 0.5rem;
	font-weight: bold;
	font-size: 36px;
`;

const CardDescription = styled.p`
	margin: 0 0 1.5rem;
	color: rgba(0, 0, 0, 0.7);
`;

const CardBody = styled.p`
	flex: 1;
	margin: 0 0 1.5rem;
`;

const IconContainer = styled.div`
	text-align: end;
	width: 100%;
`;

const Icon = styled.i`
	font-size: 24px;
	padding-right: 10px;
	color: black;
	margin-bottom: 1rem;
	color: rgba(0, 0, 0, 0.7);
`;

const Repository = ({
	repo: {
		name,
		description,
		homepageUrl,
		url,
		object: {text: readme},
	},
}) => {
	const {title, longDescription} = useReadme(readme);

	return (
		<Card>
			<CardTitle>{title}</CardTitle>
			<CardDescription>{description}</CardDescription>
			<CardBody
				dangerouslySetInnerHTML={{
					__html: marked(longDescription).slice(3, -5)
				}}
			/>
			<IconContainer>
				<a href={url}>
					<Icon className="fab fa-github" />
				</a>
				<a href={`/projects/${name}`}>
					<Icon className="fas fa-book-open" />
				</a>
				{homepageUrl && <a href={homepageUrl}>
					<Icon className="fas fa-external-link" />
				</a>}
			</IconContainer>
		</Card>
	);
};

export default Repository;

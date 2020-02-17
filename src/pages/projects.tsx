import * as React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Repository from '../components/repository';

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 50%);
	
	@media(max-width: 576px) {
		grid-template-columns: auto;
	}
`;

const Projects = ({
	data: {
		allGithubData: {
			nodes: [{
				data: {
					user: {
						pinnedItems: {
							nodes: pinnedRepositories,
						},
					},
				},
			}],
		},
	},
}) => (
	<Layout title="Projects">
		<p>
			These are some of the projects I've been working on that I want to
			showcase! This page is generated from my list of pinned repositories
			on Github, but if you want to see other things I've done, you can
			visit <a href="https://github.com/piticent123">my profile</a>.
		</p>
		<p>
			As a disclaimer, most of my projects are unfinished (as is the case
			with most side projects). However, I try to delete the ones that
			are practically just the boilerplate.
		</p>
		<Grid>
			{pinnedRepositories.map(repo => <Repository repo={repo} />)}
		</Grid>
	</Layout>
);

export default Projects;

export const query = graphql`
	query ProjectsQuery {
		allGithubData {
			nodes {
				data {
					user {
						pinnedItems {
							nodes {
								name
								description
								homepageUrl
								url
								object {
									text
								}
							}
						}
					}
				}
			}
		}
	}
`;

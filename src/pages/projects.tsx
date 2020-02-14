import * as React from 'react';
import {graphql} from 'gatsby';

import Layout from '../components/layout';
import Repository from '../components/repository'

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
	<Layout>
		{pinnedRepositories.map(repo => <Repository data={repo} />)}
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

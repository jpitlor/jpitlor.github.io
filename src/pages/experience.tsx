import * as React from 'react';

import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Job from '../components/job';

const Experience = ({data: {allContentfulJob: {nodes: jobs}}}) => (
	<Layout>
		{jobs.map(job => <Job data={job} />)}
	</Layout>
);

export default Experience;

export const query = graphql`
	query ExperienceQuery {
		allContentfulJob {
			nodes {
				isHourly
				endPay
				endDate
				startDate
				startPay
				title
				company
				description {
					json
				}
			}
		}
	}
`;

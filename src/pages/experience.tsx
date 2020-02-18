import * as React from 'react';
import {useState} from "react";
import groupBy from "lodash.groupby";

import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Job from '../components/job';
import JobDetails from "../components/job-details";

interface AllContentfulJob {
	nodes: object;
}

interface Data {
	allContentfulJob: AllContentfulJob;
}

interface ExperienceProps {
	data: Data;
}

const Experience = ({data: {allContentfulJob: {nodes: jobs}}}: ExperienceProps) => {
	const [moreDetailsJob, setMoreDetailsJob] = useState(null);
	const onClickJob = job => () => setMoreDetailsJob(job);
	const groupedJobs = groupBy(jobs, job => job.startDate);

	return (
		<Layout title="Experience">
			<div className="container">
				<div className="columns">
					<div className="timeline column">
						<header className="timeline-header">
							<span className="tag is-medium is-primary">Start</span>
						</header>
						<div className="timeline-item">
							<div className="timeline-marker" />
							<div className="timeline-content">
								<p className="heading">January 2016</p>
								<p>Timeline content - Can include any HTML element</p>
							</div>
						</div>
						<div className="timeline-item">
							<div className="timeline-marker is-image is-32x32">
								<img src="http://bulma.io/images/placeholders/32x32.png" />
							</div>
							<div className="timeline-content">
								<p className="heading">February 2016</p>
								<p>Timeline content - Can include any HTML element</p>
							</div>
						</div>
						<header className="timeline-header">
							<span className="tag is-primary">2017</span>
						</header>
						<div className="timeline-item">
							<div className="timeline-marker is-icon">
								<i className="fa fa-flag" />
							</div>
							<div className="timeline-content">
								<p className="heading">March 2017</p>
								<p>Timeline content - Can include any HTML element</p>
							</div>
						</div>
						<div className="timeline-header">
							<span className="tag is-medium is-primary">End</span>
						</div>
					</div>
					<JobDetails job={moreDetailsJob} />
				</div>
			</div>
			{/*{jobs.map(job => <Job data={job} />)}*/}
		</Layout>
	);
};

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

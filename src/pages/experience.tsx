import * as React from "react";
import {useState} from "react";
import groupBy from "lodash.groupby";

import Layout from "../components/layout";
import {graphql} from "gatsby";
import JobDetails from "../components/job-details";
import {Job, TransformedJob} from "../utils/types";
import styled from "styled-components";

interface AllContentfulJob {
	nodes: Job[];
}

interface Data {
	allContentfulJob: AllContentfulJob;
}

interface ExperienceProps {
	data: Data;
}

type GroupedJobs = [number, TransformedJob[]][];

const Months = [
	"January", "February", "March", "April", "May", "June", "July", "August",
	"September", "October", "November", "December"
];

const TimelineContent = styled.div`
	border-radius: 6px;
	transition: box-shadow 0.3s;
	padding: 0.75rem;
	margin: -0.75rem 0 -0.75rem -0.75rem;
	cursor: pointer;
	
	&:hover {
		box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
	}
`;

const Experience = ({data: {allContentfulJob: {nodes}}}: ExperienceProps) => {
	const [moreDetailsJob, setMoreDetailsJob] = useState<TransformedJob | null>(null);
	const onClickJob = (job: TransformedJob) => () => setMoreDetailsJob(job);
	const jobs: GroupedJobs = Object.entries(
		groupBy(nodes, job =>
			Math.floor(Number(job.startDate.substr(0, 4)) / 5)))
		.map(([year, jobs]) => ([
			Number(year) * 5,
			jobs.map(j => ({
				...j,
				startDate: new Date(j.startDate),
				endDate: j.endDate ? new Date(j.endDate) : null
			})),
		]));
	jobs.sort((a, b) => {
		const x = Number(a[0]);
		const y = Number(b[0]);

		if (x < y) return 1;
		if (x === y) return 0;
		return -1;
	});
	jobs.forEach(([_, jobs]) => {
		jobs.sort((a, b) => {
			const x = a.startDate.getTime();
			const y = b.startDate.getTime();

			if (x < y) return 1;
			if (x === y) return 0;
			return -1;
		});
	});

	return (
		<Layout title="Experience">
			<div className="container">
				<div className="columns">
					<div className="timeline column">
						<header className="timeline-header">
							<span className="tag is-medium is-primary">
								Today
							</span>
						</header>
						{jobs.map(([year, jobs]) => (
							<React.Fragment>
								{jobs.map(job => (
									<div className="timeline-item">
										<div className="timeline-marker" />
										<div className="timeline-content">
											<TimelineContent onClick={onClickJob(job)}>
												<p className="heading">
													{Months[job.startDate.getMonth()]}
													&nbsp;
													{job.startDate.getFullYear()}
												</p>
												<p>{job.company} ({job.title})</p>
											</TimelineContent>
										</div>
									</div>
								))}
								<header className="timeline-header">
									<span className="tag is-primary">
										{year}
									</span>
								</header>
							</React.Fragment>
						))}
						<div className="timeline-item" />
						<div className="timeline-header">
							<span className="tag is-medium is-primary">
								January 1, 1970
							</span>
						</div>
					</div>
					<JobDetails job={moreDetailsJob} />
				</div>
			</div>
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

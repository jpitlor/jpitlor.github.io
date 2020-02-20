import * as React from 'react';
import {useEffect, useMemo, useState} from 'react';
import groupBy from 'lodash.groupby';

import Layout from '../components/layout';
import {graphql} from 'gatsby';
import JobDetails from '../components/job-details';
import {Job, TransformedJob, Location} from '../utils/types';
import styled from 'styled-components';

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
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
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

async function getGoogleMapLocation({lat, lon}: Location): Promise<string> {
    const route = 'https://maps.googleapis.com/maps/api/geocode/json';
    const queryString = `?latlng=${lat},${lon}&key=${process.env.GATSBY_GOOGLE_MAPS_API_TOKEN}`;
    const fetchResult = await fetch(route + queryString);
    const apiResult = await fetchResult.json();

    return apiResult.results[0].place_id;
}

const Experience = ({data: {allContentfulJob: {nodes}}}: ExperienceProps) => {
    const [moreDetailsJob, setMoreDetailsJob] = useState<TransformedJob | null>(null);
    const [locations, setLocations] = useState<Record<string, string>>({});
    const onClickJob = (job: TransformedJob) => () => setMoreDetailsJob(job);
    const jobs: GroupedJobs = useMemo(() => {
        const result: GroupedJobs = Object
            .entries(
                groupBy(
                    nodes,
                    job => Math.floor(Number(job.startDate.substr(0, 4)) / 5)
                )
            )
            .map(([year, jobs]) => ([
                Number(year) * 5,
                jobs.map(j => ({
                    ...j,
                    startDate: new Date(j.startDate),
                    endDate: j.endDate ? new Date(j.endDate) : null,
                })),
            ]));

        result.sort((a, b) => {
            const x = Number(a[0]);
            const y = Number(b[0]);

            if (x < y) return 1;
            if (x === y) return 0;
            return -1;
        });
        result.forEach(([_, j]) => {
            j.sort((a, b) => {
                const x = a.startDate.getTime();
                const y = b.startDate.getTime();

                if (x < y) return 1;
                if (x === y) return 0;
                return -1;
            });
        });

        return result;
    }, []);
    useEffect(() => {
        async function doEffect() {
            const locationIds = (await Promise
                .all(jobs.map(async ([, jobDetails]) =>
                    await Promise.all(
                        jobDetails.map(async j => ([
                            `${j.location.lat},${j.location.lon}`,
                            await getGoogleMapLocation(j.location),
                        ]))
                    )
                )))
                .flat()
                .reduce((acc, [key, value]) => ({
                    ...acc,
                    [key]: value,
                }), {});

            setLocations(locationIds);
        }

        doEffect();
    }, []);

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
                    <JobDetails
                        job={moreDetailsJob}
                        locationId={locations[`${moreDetailsJob?.location.lat},${moreDetailsJob?.location.lon}`]}
                    />
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
				location {
					lat
					lon
				}
				description {
					json
				}
			}
		}
	}
`;

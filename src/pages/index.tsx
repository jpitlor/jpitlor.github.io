import * as React from 'react';
import {graphql} from 'gatsby';

import Layout from '../components/layout';
import {GatsbyArrayQuery} from '../utils/types';
import {ContentfulJob, ContentfulSchool, File, GithubData} from '../utils/schema';
import Repository from '../components/repository';
import styled from 'styled-components';
import {useState} from 'react';
import {useMemo} from 'react';
import _ from 'lodash';
import {useEffect} from 'react';
import JobDetails from '../components/job-details';

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 50%);
	grid-column-gap: 1rem;
	
	@media(max-width: 576px) {
		grid-template-columns: auto;
	}
`;

type GroupedJobs = [number, any[]][];

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

const TextContent = styled.p`
    max-width: 40rem;
    line-height: 1.5;
    margin: 0 auto;
`;

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

async function getGoogleMapLocation({lat, lon}: any): Promise<string> {
    const route = 'https://maps.googleapis.com/maps/api/geocode/json';
    const queryString = `?latlng=${lat},${lon}&key=${process.env.GATSBY_GOOGLE_MAPS_API_TOKEN}`;
    const fetchResult = await fetch(route + queryString);
    const apiResult = await fetchResult.json();

    return apiResult.results[0].place_id;
}

const IndexPage = ({
    data: {
        allContentfulSchool: {nodes: schools},
        allFile: {nodes: pictures},
        allContentfulJob: {nodes: rawJobs},
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
}: GatsbyArrayQuery<File> & GatsbyArrayQuery<ContentfulSchool> & GatsbyArrayQuery<GithubData> & GatsbyArrayQuery<ContentfulJob>) => {
    // const pictures = nodes.map(n => n.childImageSharp.fixed.src);
    // const [universities, highSchool] = _.partition(nodes, 'major');

    const [moreDetailsJob, setMoreDetailsJob] = useState<any | null>(null);
    const [locations, setLocations] = useState<Record<string, string>>({});
    const onClickJob = (job: any) => () => setMoreDetailsJob(job);
    const jobs: GroupedJobs = useMemo(() => {
        const result: GroupedJobs = Object
            .entries(
                _.groupBy(
                    rawJobs,
                    job => Math.floor(Number(job.startDate.substr(0, 4)) / 5)
                )
            )
            .map(([year, jobGroups]) => ([
                Number(year) * 5,
                jobGroups.map(j => ({
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
        result.forEach(([, j]) => {
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

    function removeNotification(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const notification = document.querySelector('.notification');
        if (notification && notification.parentElement) {
            notification.parentElement.removeChild(notification);
        }
    }

    return (
        <Layout title="Resume">
            <div className="container">
                <div className="notification is-info">
                    <button className="delete" onClick={removeNotification} />
                    Looking for a PDF version? <a href="#">Click here</a>!
                </div>
            </div>

            <section className="hero">
                <div className="hero-body">
                    <h2 className="title has-text-centered">Education</h2>
                    <div className="container">
                        <span />
                    </div>
                </div>
            </section>
            <section className="hero is-light">
                <div className="hero-body">
                    <h2 className="title has-text-centered">Projects</h2>
                    <TextContent>
                        These are some of the projects I&apos;ve been working on that I want to
                        showcase! This page is generated from my list of pinned repositories
                        on Github, but if you want to see other things I&apos;ve done, you can
                        visit <a href="https://github.com/piticent123">my profile</a>.
                    </TextContent>
                    <br />
                    <TextContent>
                        As a disclaimer, most of my projects are unfinished (as is the case
                        with most side projects). However, I try to delete the ones that
                        are practically just the boilerplate.
                    </TextContent>
                    <br />
                    <br />
                    <Grid className="container">
                        {pinnedRepositories.map((repo: any, i: any) => (
                            <Repository repo={repo} key={i} />
                        ))}
                    </Grid>
                </div>
            </section>
            <section className="hero">
                <div className="hero-body">
                    <h2 className="title has-text-centered">Experience</h2>
                    <div className="container">
                        <div className="columns">
                            <div className="timeline column">
                                <header className="timeline-header">
                                    <span className="tag is-medium is-primary">
                                            Today
                                    </span>
                                </header>
                                {jobs.map(([year, jobGroup], i) => (
                                    <React.Fragment key={i}>
                                        {jobGroup.map(job => (
                                            <div className="timeline-item" key={job.startDate.getTime()}>
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
                            <div className="column">
                                <JobDetails
                                    job={moreDetailsJob}
                                    locationId={locations[`${moreDetailsJob?.location.lat},${moreDetailsJob?.location.lon}`]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    query IndexQuery {
        allFile(filter: {relativePath: {glob: "home_*"}}) {
            nodes {
                childImageSharp {
                    fixed(jpegQuality: 100) {
                        src
                    }
                }
            }
        }

        allContentfulSchool {
            nodes {
                endDate
                startDate
                name
                gpa
                inProgress
                major
                minor
                concentration
                location {
                    lat
                    lon
                }
            }
        }

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

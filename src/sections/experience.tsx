import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import JobDetails from "../components/job-details";
import _ from "lodash";
import {useJobs} from "../utils/useData";
import Section from "../components/section";

type GroupedJobs = [number, any[]][];

const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

async function getGoogleMapLocation({lat, lon}: any): Promise<string> {
    const route = "https://maps.googleapis.com/maps/api/geocode/json";
    const queryString = `?latlng=${lat},${lon}&key=${process.env.GATSBY_GOOGLE_MAPS_API_TOKEN}`;
    const fetchResult = await fetch(route + queryString);
    const apiResult = await fetchResult.json();

    return apiResult.results[0].place_id;
}

export default function Experience() {
    const rawJobs = useJobs();
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
    const [[hji, hjj], setHoveredJob] = useState([-1, -1]);

    function onHover(i: number, j: number) {
        return () => setHoveredJob([i, j]);
    }

    function onExit() {
        setHoveredJob([-1, -1]);
    }

    return (
        <Section title="Experience">
            <div className="columns">
                <div className="timeline column">
                    <header className="timeline-header">
                        <span className="tag is-medium is-primary">
                            Today
                        </span>
                    </header>
                    {jobs.map(([year, jobGroup], i) => (
                        <React.Fragment key={i}>
                            {jobGroup.map((job, j) => (
                                <div className="timeline-item" key={job.startDate.getTime()}>
                                    <div className="timeline-marker" />
                                    <div className="timeline-content">
                                        <div
                                            className={i === hji && j === hjj
                                                ? "box"
                                                : "box is-shadowless"
                                            }
                                            style={{
                                                borderRadius: "6px",
                                                transition: "box-shadow 0.3s",
                                                padding: "0.75rem",
                                                margin: "-0.75rem 0 -0.75rem -0.75rem",
                                                cursor: "pointer",
                                            }}
                                            onClick={onClickJob(job)}
                                            onMouseEnter={onHover(i, j)}
                                            onMouseLeave={onExit}
                                        >
                                            <p className="heading">
                                                {Months[job.startDate.getMonth()]}
                                                &nbsp;
                                                {job.startDate.getFullYear()}
                                            </p>
                                            <p>{job.company} ({job.title})</p>
                                        </div>
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
        </Section>
    );
}

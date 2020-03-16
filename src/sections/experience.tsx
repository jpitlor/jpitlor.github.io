import * as React from "react";
import {useState} from "react";
import JobDetails from "../components/job-details";
import {Job, useJobs} from "../utils/useJobs";
import Section from "../components/section";

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

export default function Experience() {
    const [moreDetailsJob, setMoreDetailsJob] = useState<Job | undefined>(undefined);
    const onClickJob = (job: Job) => () => setMoreDetailsJob(job);
    const jobs = useJobs();
    const currentJobs = jobs.flatMap(x => x[1]).filter(j => !j.endDate);

    const [[hji, hjj], setHoveredJob] = useState([-1, -1]);
    function onHover(i: number, j: number) {
        return () => setHoveredJob([i, j]);
    }
    function onExit() {
        setHoveredJob([-1, -1]);
    }

    return (
        <Section title="Experience">
            <br />
            <div className="columns">
                <div className="column is-5-desktop">
                    {currentJobs.length > 0 && (
                        <div style={{padding: "1.25rem"}}>
                            <h3 className="subtitle has-text-weight-bold">
                                Current Jobs
                            </h3>
                            <ul>
                                {currentJobs.map(job => (
                                    <li key={job.company}>
                                        <a onClick={onClickJob(job)}>{job.company} ({job.title})</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div style={{padding: "1.25rem"}}>
                        <h3 className="subtitle has-text-weight-bold">
                            Past Jobs
                        </h3>
                        <p className="panel-block">
                            <div className="timeline">
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
                                                            ? "box has-background-light"
                                                            : "box has-background-light is-shadowless"
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
                        </p>
                    </div>
                </div>
                <div className="column">
                    <JobDetails
                        job={moreDetailsJob}
                        locationId={moreDetailsJob?.location}
                    />
                </div>
            </div>
        </Section>
    );
}

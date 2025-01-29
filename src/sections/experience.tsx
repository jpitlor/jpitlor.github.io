import React, { useState } from "react";
import JobDetails from "../components/job-details";
import { Job, useJobs } from "../utils/useJobs";
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
  const [moreDetailsJob, setMoreDetailsJob] = useState<Job | undefined>(
    undefined,
  );
  const jobs = useJobs();
  const [[hji, hjj], setHoveredJob] = useState([-1, -1]);

  return (
    <Section title="Experience">
      <br />
      <div className="columns">
        <div className="column" style={{ order: 2 }}>
          <JobDetails
            job={moreDetailsJob}
            locationId={moreDetailsJob?.location}
          />
        </div>
        <div className="column is-5-desktop">
          <div style={{ padding: "1.25rem" }}>
            <h3 className="subtitle has-text-weight-bold">Current Jobs</h3>
            <ul>
              {jobs
                .flatMap((x) => x[1])
                .filter((j) => !j.endDate)
                .map((job) => {
                  function onClick() {
                    setMoreDetailsJob(job);
                  }

                  return (
                    <li key={job.company}>
                      <a onClick={onClick}>
                        {job.company} ({job.title})
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div style={{ padding: "1.25rem" }}>
            <h3 className="subtitle has-text-weight-bold">All Jobs</h3>
            <div className="panel-block">
              <div className="timeline">
                <div className="timeline-header">
                  <span className="tag is-medium is-primary">Today</span>
                </div>
                {jobs.map(([year, jobGroup], i) => (
                  <React.Fragment key={i}>
                    {jobGroup.map((job, j) => {
                      function onMouseEnter() {
                        setHoveredJob([i, j]);
                      }

                      function onMouseLeave() {
                        setHoveredJob([-1, -1]);
                      }

                      function onClick() {
                        setMoreDetailsJob(job);
                      }

                      return (
                        <div
                          className="timeline-item"
                          key={job.startDate.getTime()}
                        >
                          <div className="timeline-marker" />
                          <div className="timeline-content">
                            <div
                              className={
                                i === hji && j === hjj
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
                              onClick={onClick}
                              onMouseEnter={onMouseEnter}
                              onMouseLeave={onMouseLeave}
                            >
                              <p className="heading">
                                {Months[job.startDate.getMonth()]}
                                &nbsp;
                                {job.startDate.getFullYear()}
                              </p>
                              <p>
                                {job.company} ({job.title})
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="timeline-header">
                      <span className="tag is-primary">{year}</span>
                    </div>
                  </React.Fragment>
                ))}
                <div className="timeline-item" />
                <div className="timeline-header">
                  <span className="tag is-medium is-primary">Career Epoch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

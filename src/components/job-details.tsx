import * as React from "react";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {Job} from "../utils/useJobs";

interface JobDetailsProps {
    job?: Job;
    locationId?: string;
}

const JobDetails = ({job, locationId}: JobDetailsProps) => (
    <div
        className="box"
        style={{
            width: "100%",
            height: "100%",
            boxShadow: "0 2px 0 hsla(0, 0%, 100%, 0.15), inset 0 2px 2px hsla(0, 0%, 0%, 0.1)",
        }}
    >
        {job ? (
            <React.Fragment>
                <p className="title is-2">{job.company}</p>
                <p className="subtitle is-4">{job.title}</p>
                <div className="content">
                    {documentToReactComponents(job.description?.json)}
                </div>

                <iframe
                    height="450"
                    frameBorder="0"
                    style={{border: 0, width: "100%"}}
                    src={`https://www.google.com/maps/embed/v1/place?q=place_id:${locationId}&key=${process.env.GATSBY_GOOGLE_MAPS_API_TOKEN}`}
                    allowFullScreen={true}
                />
            </React.Fragment>
        ) : (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                }}
            >
                <span className="has-text-grey is-size-4">
                    Select a job to see more details
                </span>
            </div>
        )}
    </div>
);

export default JobDetails;

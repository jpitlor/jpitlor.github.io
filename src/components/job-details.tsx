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
        }}
    >
        {job ? (
            <React.Fragment>
                <p className="title is-2">{job.company}</p>
                <p className="subtitle is-4">{job.title}</p>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "calc(100% - 6.5rem)",
                    }}
                >
                    <div className="content" style={{flex: 1}}>
                        {documentToReactComponents(job.description?.json)}
                    </div>

                    <iframe
                        height="450"
                        frameBorder="0"
                        style={{border: 0, width: "100%"}}
                        src={`https://www.google.com/maps/embed/v1/place?q=place_id:${locationId}&key=${process.env.GATSBY_GOOGLE_MAPS_API_TOKEN}`}
                        allowFullScreen={true}
                    />
                </div>
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

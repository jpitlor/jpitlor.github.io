import * as React from "react";
import {ContentfulJob} from "../utils/schema";
import useDescription from "../utils/useDescription";

interface JobDetailsProps {
    job: ContentfulJob | null;
    locationId: string;
}

const JobDetails = ({job, locationId}: JobDetailsProps) => (
    <div className="box" style={{width: "100%"}}>
        {job ? (
            <React.Fragment>
                <p className="title is-2">{job?.company}</p>
                <p className="subtitle is-4">{job?.title}</p>
                {useDescription(job?.description.json)}

                <iframe
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{border: 0}}
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

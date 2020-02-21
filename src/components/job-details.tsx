import * as React from 'react';
import {ContentfulJob} from '../utils/schema';
// import marked from "marked";

interface JobDetailsProps {
    job: ContentfulJob | null;
    locationId: string;
}

const JobDetails = ({job, locationId}: JobDetailsProps) => (
    <div className="panel is-grey column">
        {job ? (
            <div>
                <strong>{job?.title}</strong>
                <small>{job?.company}</small>

                {/* <p dangerouslySetInnerHTML={{__html: marked()}}*/}

                <iframe
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{border: 0}}
                    src={`https://www.google.com/maps/embed/v1/place?q=place_id:${locationId}&key=${process.env.GATSBY_GOOGLE_MAPS_API_TOKEN}`}
                    allowFullScreen={true}
                />
            </div>
        ) : (
            <div className="centered-container">
                <span className="has-text-grey is-size-4">
                    Select a job to see more details
                </span>
            </div>
        )}
    </div>
);

export default JobDetails;

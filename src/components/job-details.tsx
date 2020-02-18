import * as React from "react";

interface Location {
    lat: number;
    lon: number;
}

interface Job {
    company: String
    contentful_id: String
    description: object // It's...complicated
    endDate: Date
    endPay: number
    isHourly: Boolean
    location: Location
    node_locale: String
    parent: Node
    spaceId: String
    startDate: Date
    startPay: number
    title: String
}

interface JobDetailsProps {
    job: Job | null;
}

const JobDetails = ({job}: JobDetailsProps) => (
    <div className="panel is-grey column">
        <div className="is-vcentered is-center">
            <span className="has-text-grey is-size-4">Select a job to see more details</span>
        </div>
    </div>
);

export default JobDetails;

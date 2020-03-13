import * as React from "react";
import {ContentfulSchool} from "../../utils/schema";

interface SchoolProps {
    school: ContentfulSchool;
}

const School = ({school}: SchoolProps) => (
    <div style={{marginBottom: "1.5rem"}}>
        <span className="is-pulled-right">
            {new Date(school.startDate).getFullYear()} - {new Date(school.endDate).getFullYear()}
        </span>
        <span className="is-size-4">{school.name} - B.S. {school.major.join(", ")}</span>
        <br />
        <strong>Campus:</strong> {school.city}
        <br />
        <strong>Minors:</strong> {school.minor.join(", ")}
        <br />
        <strong>Concentrations:</strong> {school.concentration.join(", ")}
    </div>
);

export default School;

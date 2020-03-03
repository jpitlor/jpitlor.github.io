import * as React from "react";
import {ContentfulSchool} from "../utils/schema";
import useQuery, {DataType} from "../utils/useQuery";

export default function Education() {
    const schools = useQuery<ContentfulSchool>(DataType.SCHOOLS);
    schools.sort((a, b) => {
        const x = new Date(a.startDate).getTime();
        const y = new Date(b.startDate).getTime();

        if (x > y) return -1;
        else if (x < y) return 1;
        else return 0;
    });

    return (
        <React.Fragment>
            <h2 className="title has-text-centered">Education</h2>
            <div className="container">
                <div className="columns is-wrapped">
                    {schools.map((s: ContentfulSchool) => (
                        <div key={s.name} className="column">
                            <h3 className="title is-1">{s.name}</h3>
                            <p className="subtitle is-3">{s.city}, {s.state}</p>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

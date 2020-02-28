import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";
import _ from "lodash";

export default function Education() {
    const {
        allContentfulSchool: {
            nodes: schools,
        },
    } = useStaticQuery(graphql`
        query EducationQuery {
            allContentfulSchool {
                nodes {
                    endDate
                    startDate
                    name
                    gpa
                    inProgress
                    major
                    minor
                    concentration
                    location {
                        lat
                        lon
                    }
                }
            }
        }
    `);
    const [universities, highSchool] = _.partition(schools, "major");

    return (
        <React.Fragment>
            <h2 className="title has-text-centered">Education</h2>
            <div className="container">
                <ul>
                    {universities.map(x => <li key={x.name}>{x.name}</li>)}
                </ul>
                <ul>
                    {highSchool.map(x => <li key={x.name}>{x.name}</li>)}
                </ul>
            </div>
        </React.Fragment>
    );
}

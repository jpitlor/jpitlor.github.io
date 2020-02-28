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
                {universities.map(x => x.name)}
                {highSchool.map(x => x.name)}
            </div>
        </React.Fragment>
    );
}

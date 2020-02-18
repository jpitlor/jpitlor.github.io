import * as React from "react"
import {graphql} from "gatsby";

import Layout from "../components/layout"

const Education = ({data: {allContentfulSchool: {nodes}}}) => {
    console.log(nodes);
    return (
        <Layout title="Education">

        </Layout>
    )
};

export const query = graphql`
    query EducationQuery {
        allContentfulSchool {
            nodes {
                endDate
                startDate
                name,
                gpa,
                inProgress,
                # Major/minor??
                location {
                    lat,
                    lon
                },
            }
        }
    }
`;

export default Education;

import * as React from "react"
import {graphql} from "gatsby";

import Layout from "../components/layout"

const SecondPage = () => (
    <Layout title="Education">

    </Layout>
);

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

export default SecondPage;

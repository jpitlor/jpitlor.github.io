import * as React from "react"
import {graphql, Link} from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
    <Layout title="Education">
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
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

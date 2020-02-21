import * as React from 'react'
import {graphql} from 'gatsby';

import Layout from '../components/layout'
import {GatsbyArrayQuery} from '../utils/types';
import {ContentfulSchool} from '../utils/schema';

const Education = ({data: {allContentfulSchool: {nodes}}}: GatsbyArrayQuery<ContentfulSchool>) => {
    console.log(nodes);
    return (
        <Layout title="Education">
            <span />
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

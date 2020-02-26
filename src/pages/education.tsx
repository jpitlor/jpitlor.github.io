import * as React from 'react'
import {graphql} from 'gatsby';
import _ from 'lodash';

import Layout from '../components/layout'
import {GatsbyArrayQuery} from '../utils/types';
import {ContentfulSchool} from '../utils/schema';

const Education = ({data: {allContentfulSchool: {nodes}}}: GatsbyArrayQuery<ContentfulSchool>) => {
    const [universities, highSchool] = _.partition(nodes, 'major');

    return (
        <Layout title="Resume">
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
`;

export default Education;

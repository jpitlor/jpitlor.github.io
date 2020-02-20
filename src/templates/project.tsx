import {graphql} from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

export default ({
    data: {
        githubData: {
            data: {
                user: {
                    pinnedItems: {
                        nodes: [repo],
                    },
                },
            },
        },
    },
}) => {
    const {
        name,
        description,
        homepageUrl,
        url,
        object: {text: readme},
    } = repo;

    return (
        <Layout title={name}>
            <p>{name} - {description}</p>
        </Layout>
    );
};

export const query = graphql`
    query ProjectQuery($name: String!) {
        githubData(data: {
            user: {
                pinnedItems: {
                    nodes: {
                        elemMatch: {
                            name: {eq: $name}
                        }
                    }   
                }
            }
        }) {
            data {
                user {
                    pinnedItems {
                        nodes {
                            name
                            description
                            homepageUrl
                            url
                            object {
                                text
                            }
                        }
                    }
                }
            }
        }
    }
`;

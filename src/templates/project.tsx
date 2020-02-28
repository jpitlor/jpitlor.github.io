import {graphql} from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const Project = ({
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
}: any) => {
    const {
        name,
        description,
        // homepageUrl,
        // url,
        // object: {text: readme},
    } = repo;

    return (
        <Layout title={name}>
            <p>{name} - {description}</p>
        </Layout>
    );
};

export default Project;

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

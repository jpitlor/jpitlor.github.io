import {graphql} from "gatsby";
import * as React from "react";

export default ({
    data: {
        githubData: {
            nodes: [{
                data: {
                    user: {
                        pinnedItems: {
                            nodes: [repo],
                        },
                    },
                },
            }],
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

    return <p>{name} - {description}</p>;
};

export const query = graphql`
    query ProjectsQuery($name: String!) {
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
            nodes {
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
    }
`;

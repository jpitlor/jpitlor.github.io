import {graphql, useStaticQuery} from "gatsby";

export enum DataType {
    JOBS,
    SCHOOLS,
    PROJECTS
}

export default function useQuery<T>(dataType: DataType): T[] {
    const {
        allContentfulJob: {nodes: jobs},
        allContentfulSchool: {nodes: schools},
        allGithubData: {
            nodes: [{
                data: {
                    user: {
                        pinnedItems: {
                            nodes: repositories,
                        },
                    },
                },
            }],
        },
    } = useStaticQuery(graphql`
        query ExperienceQuery {
            allContentfulJob {
                nodes {
                    isHourly
                    endPay
                    endDate
                    startDate
                    startPay
                    title
                    company
                    location {
                        lat
                        lon
                    }
                    description {
                        json
                    }
                }
            }

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

            allGithubData {
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
    `);

    switch (dataType) {
        case DataType.JOBS:
            return jobs;
        case DataType.SCHOOLS:
            return schools;
        case DataType.PROJECTS:
            return repositories;
    }
}

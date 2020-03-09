import {graphql, useStaticQuery} from "gatsby";
import {ContentfulComposition, ContentfulJob, ContentfulSchool, GithubDataDataUserPinnedItemsNodes} from "./schema";

export enum DataType {
    JOBS,
    SCHOOLS,
    PROJECTS,
    COMPOSITIONS
}

export function useJobs(): ContentfulJob[] {
    const {
        allContentfulJob: {nodes: jobs},
    } = useStaticQuery(graphql`
        query {
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
        }
    `);

    return jobs;
}

export function useSchools(): ContentfulSchool[] {
    const {
        allContentfulSchool: {nodes: schools},
    } = useStaticQuery(graphql`
        query {
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
                    city
                    state
                    logo {
                        file {
                            url
                        }
                    }
                    location {
                        lat
                        lon
                    }
                }
            }
        }
    `);

    return schools;
}

export function useProjects(): GithubDataDataUserPinnedItemsNodes[] {
    const {
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
        query {
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

    return repositories;
}

export function useCompositions(): ContentfulComposition[] {
    const {
        allContentfulComposition: {nodes: compositions},
    } = useStaticQuery(graphql`
        query ExperienceQuery {
            allContentfulComposition {
                nodes {
                    title
                    description
                    recording {
                        file {
                            url
                        }
                    }
                }
            }
        }
    `);

    return compositions;
}

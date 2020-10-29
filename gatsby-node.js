const path = require("path");
const fs = require("fs");

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const {
        data: {
            allGithubData: {
                nodes: [{
                    data: {
                        user: {
                            pinnedItems: {
                                nodes: pinnedGithubRepos,
                            },
                        },
                    },
                }],
            },
            allContentfulSchool: {nodes: schools},
            allContentfulFeatured: {
                nodes: [{resumeJobs}],
            },
        },
    } = await graphql(`
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
            allContentfulFeatured {
                nodes {
                    resumeJobs {
                        isHourly
                        endPay
                        endDate
                        startDate
                        startPay
                        title
                        company
                        city
                        state
                        description {
                            json
                        }
                    }
                }
            }
        }
    `);
    const jobs = resumeJobs.map(j => ({
        ...j,
        startDate: new Date(j.startDate),
        endDate: j.endDate ? new Date(j.endDate) : undefined,
        useInResume: true,
    }));
    const projects = pinnedGithubRepos.slice(0, 3);

    fs.writeFileSync("resume-data.json", JSON.stringify({jobs, projects, schools}));

    projects.forEach(repo => createPage({
        path: `projects/${repo.name}`,
        component: path.resolve("./src/templates/project.tsx"),
        context: {repo},
    }));
};

const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const {
        data: {
            allGithubData: {
                nodes: [{
                    data: {
                        user: {
                            pinnedItems: {
                                nodes: pinnedRepositories,
                            },
                        },
                    },
                }],
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
        }
    `);

    pinnedRepositories.forEach(repo => createPage({
        path: `projects/${repo.name}`,
        component: path.resolve('./src/templates/project.tsx'),
        context: {name: repo.name},
    }))
};

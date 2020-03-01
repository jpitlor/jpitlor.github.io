const path = require("path");
const http = require("http");
const fs = require("fs");
const pdf = require("html-pdf");

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
        component: path.resolve("./src/templates/project.tsx"),
        context: {name: repo.name},
    }));
};

exports.onPostBuild = async () => {
    await new Promise(resolve => {
        const html = fs.readFileSync("./public/printable-resume/index.html", "utf-8");
        pdf.create(html).toFile("public/Jordan Pitlor Resume.pdf", resolve);
    });
};

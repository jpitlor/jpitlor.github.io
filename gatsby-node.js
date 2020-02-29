const path = require('path');
const http = require('http');
const fs = require('fs');

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
    }));

    await new Promise(resolve => {
        const documentUrl = encodeURIComponent("https://pitlor.dev/printable-resume");
        const resumeUrl = `http://api.pdflayer.com/api/convert
            ?access_key=${process.env.GATSBY_PDF_LAYER_API_TOKEN}
            &document_url=${documentUrl}
            &document_name=Jordan%20Pitlor%20Resume.pdf
        `.replace(/[ \n]/g, "");

        const file = fs.createWriteStream(
            path.join("public", "Jordan Pitlor Resume.pdf")
        );
        http.get(resumeUrl, result => {
            result.pipe(file);
            result.on('end', () => {
                file.close();
                resolve();
            });
        });
    })
};

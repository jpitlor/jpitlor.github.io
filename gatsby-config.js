require(`dotenv`).config();
module.exports = {
    siteMetadata: {
        title: `Jordan Pitlor`,
        description: `Software Engineer. Say hi at jordan@pitlor.dev!`,
        author: `Jordan Pitlor`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-eslint`,
            options: {
                test: /\.ts$|\.tsx$/,
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-purgecss`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Jordan Pitlor`,
                short_name: `Jordan Pitlor`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.jpg`,
            },
        },
        {
            resolve: `gatsby-source-github-api`,
            options: {
                token: process.env.GITHUB_API_TOKEN,
                variables: {},
                graphQLQuery: `
					query {
						user(login: "piticent123") {
							pinnedItems(first: 6) {
								nodes {
									... on Repository {
										name
										url
										description
										homepageUrl
										object(expression: "master:README.md") {
											... on Blob {
												text
											}
										}
									}
								}
							}
						}
					}
				`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `8lixs3gr7ad9`,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                downloadLocal: true,
            },
        },
    ],
};

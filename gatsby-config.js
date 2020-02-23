require(`dotenv`).config();
module.exports = {
    siteMetadata: {
        title: `Jordan Pitlor`,
        description: `Software Engineer. Contact me at jordan@pitlor.dev!`,
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
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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

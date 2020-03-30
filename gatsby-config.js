require("dotenv").config();
module.exports = {
    siteMetadata: {
        title: "Jordan Pitlor",
        description: "Software Engineer. Say hi at jordan@pitlor.dev!",
        author: "Jordan Pitlor",
        siteUrl: "https://www.pitlor.dev",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-eslint",
            options: {
                test: /\.ts$|\.tsx$/,
            },
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-purgecss",
        "gatsby-plugin-typescript",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-offline",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Jordan Pitlor",
                short_name: "Jordan Pitlor",
                start_url: "/",
                background_color: "hsl(209, 72%, 21%)",
                theme_color: "hsl(191, 100%, 45%)",
                display: "minimal-ui",
                icon: "src/images/favicon.jpg",
            },
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-72496195-1",
            },
        },
        {
            resolve: "gatsby-source-github-api",
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
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: "8lixs3gr7ad9",
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                downloadLocal: true,
            },
        },
    ],
};

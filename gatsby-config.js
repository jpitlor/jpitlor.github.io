require('dotenv').config();
module.exports = {
	siteMetadata: {
		title: 'Jordan Pitlor',
		description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
		author: 'Jordan Pitlor',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
			},
		},
		{
			resolve: 'gatsby-source-github-api',
			options: {
				token: 'e246c54ff3233d4e79b7f6050e7e4a4b3089766e',
				variables: {}
			}
		},
		{
			resolve: 'gatsby-source-contentful',
			options: {
			  spaceId: '8lixs3gr7ad9',
			  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			  downloadLocal: true,
			},
		  },
	],
}

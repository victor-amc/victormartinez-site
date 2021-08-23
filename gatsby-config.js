module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "Victor Martinez Site",
	},
	plugins: [
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
			},
		},
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: /images\/.*\.svg/,
					omitKeys: [
						"xmlnsDc",
						"xmlnsCc",
						"xmlnsRdf",
						"xmlnsSvg",
						"xmlnsSodipodi",
						"xmlnsInkscape",
					],
				},
			},
		},
		{
			resolve: `gatsby-source-datocms`,
			options: {
				apiToken: `1d87ef74b786c8051c23622da51096`,
				environment: `main`,
				// If you are working on development/staging environment, you might want to
				// preview the latest version of records instead of the published one:
				previewMode: false,
				disableLiveReload: false,
			},
		},
	],
};

const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://santosrai.site",
		"gaTrackingId": "UA-145466832-1",
		"trailingSlash": false
	},
	"header": {
		"logo": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/favicon.png",
		"logoLink": "#",
		"title": "Dev Git Notebook",
		"githubUrl": "https://github.com/Gitsanto/dev-notebook",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction", // add trailing slash if enabled above
			"/VBACourse",
			"/JavaScriptCourse",
			"/ReactCourse"

		],
    	"collapsedNav": [
			  "/VBACourse", // add trailing slash if enabled above
			  "/JavaScriptCourse",
			  "/GraphqlCourse",
			  "/ReactCourse",
			  "/UiPathCourse",
			  "/AWSCourse",
			
    	],
		"links": [
			{ "text": "Gitsanto", "link": "https://santosrai.site"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Dev Git Notebook | Gitsanto",
		"description": "Documentation built with mdx. Powering learn.hasura.io ",
		"ogImage": null,
		"docsLocation": "https://github.com/Gitsanto/dev-notebook/tree/master/content",
		"favicon": "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
	},
	"pwa": {
		"enabled": true, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "Gatsby Gitbook Starter",
			"short_name": "GitbookStarter",
			"start_url": "/",
			"background_color": "#6b37bf",
			"theme_color": "#6b37bf",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/pwa-512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;

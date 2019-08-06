const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://gitsanto.github.io",
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/favicon.png",
		"logoLink": "#",
		"title": "Dev Git Notebook",
		"githubUrl": "https://github.com/Gitsanto/gatsby-gitbook-starter",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
    		"/codeblock"
		],
		"links": [
			{ "text": "Gitsanto", "link": "https://gitsanto.github.io"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Gatsby Gitbook Boilerplate | Hasura",
		"description": "Documentation built with mdx. Powering learn.hasura.io ",
		"ogImage": null,
		"docsLocation": "https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content",
		"favicon": "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
	},
};

module.exports = config;

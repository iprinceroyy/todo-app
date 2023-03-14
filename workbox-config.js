module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{jpg,png,svg,css,js,html,json,md,scss}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
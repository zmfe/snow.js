const banner = require('./rollup.config.js');

module.exports = {
	plugins: {
		'postcss-cssnext': {
			variables: {
				mainColor: 'red',
				altColor: 'blue',
			},
		},
		// 'postcss-url': {
		// 	url: 'inline',
		// },
		'postcss-custom-selectors': {

		},
		'postcss-header': {
			banner,
		},
		stylefmt: {},
	},
};

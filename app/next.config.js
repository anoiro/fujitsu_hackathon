// next.config.js
const withCSS = require('@zeit/next-css');

module.exports = withCSS({ // 設定を"withCSS"に渡す
	exportPathMap: function() {
		return {
			'/': {page: '/'}
		}
	}
});

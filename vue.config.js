var path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
	configureWebpack: {
		plugins: [
			new PrerenderSPAPlugin({
				staticDir: path.join(__dirname, 'dist'), // The path to the folder where index.html is.
				routes: [
					'/',
					'/news',
					'/programs',
					'/programs/:courseId',
					'/prices',
					'/teachers',
					'/teachers/:teacherId',
					'/comments',
					'/oferta',
					'/payment',
					'/404',
				], // List of routes to prerender.
				renderer: new PuppeteerRenderer(),
			}),
		],
	},
	transpileDependencies: ['vue-meta'],
}

// module.exports = {
// 	transpileDependencies: ['vue-meta'],
// }

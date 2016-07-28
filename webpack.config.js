module.exports = {
	entry: "./src/App.js", // Root component - So React will start processing
	output: {
		filename: "public/bundle.js"  // Webpack will put new transpiled code in this file
	},
	module: {		// Tell React how to handle the App.js code and all it's children
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: "node_modules",
				loader: "babel",
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};
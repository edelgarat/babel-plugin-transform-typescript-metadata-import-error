const path = require("path");

module.exports = {
	mode: "development",
	entry: path.join(__dirname, "src/index.ts"),
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							["@babel/preset-typescript", {}]
						],
						plugins: [
							["@babel/plugin-proposal-decorators", { "legacy": true }],
							["@babel/plugin-proposal-class-properties", { "loose" : true }],
							"babel-plugin-transform-typescript-metadata",
						]
					}
				}
			}
		]
	},
	output: {
		filename: "bundle.js"
	}
}
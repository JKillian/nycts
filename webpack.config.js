const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const { CheckerPlugin } = require('awesome-typescript-loader')

const PAGE_DIR = "./src/pages";
const pages = fs.readdirSync(PAGE_DIR).map(page => path.parse(path.join(PAGE_DIR, page)));
const entry = pages.reduce((obj, page) => ({...obj, [page.name]: "./" + path.join(page.dir, page.name)}), {});
const htmlPlugins = pages.map(page => new HtmlWebpackPlugin({
    filename: `${page.name}.html`,
    chunks: ['commons', page.name],
    template: './src/page_template.ejs',
    title: 'NYC.TS',
}));

module.exports = {
    entry,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'source-map',
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js"
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'awesome-typescript-loader' },
            { test: /\.(png|jpg)$/, use: 'file-loader' },
        ],
    },
	plugins: [
        new CleanWebpackPlugin(['dist']),
        new CheckerPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			filename: "commons.js",
			name: "commons"
        }),
        ...htmlPlugins,
    ],
    devServer: {
        contentBase: "./dist",
    },
};

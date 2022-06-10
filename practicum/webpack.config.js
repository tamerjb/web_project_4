// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin"); // connect plugin
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin"); // connect plugin



module.exports = {
    devtool: 'inline-source-map',
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        publicPath: ""
    },
    target: ['web', 'es5'],
    stats: {
        children: true
    }, // Show child compilation errors from plugins
    mode: "development",
    devServer: {
        static: path.resolve(__dirname, "./dist"),
        compress: true,
        port: 8080,
        open: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: "/node_modules/"
        }]
    },
    plugins: [new HtmlWebpackPlugin({
            template: "./src/index.html" // path to our index.html file
        }), new CleanWebpackPlugin(), // use plugin
    ], // add the array here
}
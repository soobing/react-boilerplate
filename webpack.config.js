const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack-react-start-kit',
            template: './public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
        noInfo: true,
        open: true,
        port: 9000,
        after: function (app, server) {
            app.listen(3000, function () {
                console.log("Webpack dev server is listening on port 9000");
            })
        }
    }
};
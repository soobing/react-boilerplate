const webpack = require('webpack');

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV || "development";

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    mode: mode,
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve("./dist"),
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NASA_API_KEY': JSON.stringify(process.env.NASA_API_KEY)
        }),
    ]
};
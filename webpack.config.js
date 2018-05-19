'use strict';

const webpack = require('webpack'),
	path = require('path'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	ManifestPlugin = require('webpack-manifest-plugin');

const BUILD_DIR = path.resolve(__dirname, './html/assets');
const APP_DIR = path.resolve(__dirname, './src');

// e.g: Run `$ PROD_ENV=1 webpack` to enable this.
const isProduction = JSON.parse(process.env.PROD_ENV || '0');


module.exports = {
	entry: './index.js',
	context: APP_DIR,
	output: {
		path: BUILD_DIR,
		filename: '[name]-[hash].js',
		publicPath: '/assets/'
	},
	module : {
		rules : [
			{
				test :   /\.jsx?$/,
				exclude: /node_modules/,
				use : 'babel-loader'
			}
		]
	},

	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [
			APP_DIR,
			path.resolve(__dirname, "node_modules"),
			'node_modules'
		],
		alias: {
			'react': 'preact-compat',
			'react-dom': 'preact-compat',
		}
	},
	plugins: [
		new CleanWebpackPlugin([BUILD_DIR]),
		new webpack.DefinePlugin({
			  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new ManifestPlugin({
			writeToFileEmit: true // Needed for PHP and Webpack Proxy
		}),
		],

	stats: { colors: true },
	node: {
		global: true,
		process: false,
		Buffer: false,
		__filename: false,
		__dirname: false,
		setImmediate: false
	},
	devServer: {
		port: process.env.PORT || 8080,
		host: 'localhost',
		contentBase: './src',
		proxy: {
			'/': {
			   target: 'http://localhost'
			}
		}
	}
};

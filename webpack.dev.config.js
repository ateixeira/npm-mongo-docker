const path = require('path')
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const version = require('./package.json').version;


// Source map
const devtool = 'eval';


// App entry
const entry =  [
    'webpack-hot-middleware/client',
    './src/index.js'
]


// App js output
const output =  {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js",
    publicPath: '/public/'
}


// Loaders
const loaders = [
    {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
    },{ 
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })

    },{ 
        test: /\.(?:png|jpg|gif)$/,
        loader: 'file' 
    },{ 
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'
    },{
        test: /\.(json)$/,
        exclude: /node_modules/,
        loader: 'json',
    },{
        loader: "sass-loader",
        test: /\.scss$/,
        options: {
            includePaths: [path.resolve(__dirname, "./src/styles")]
        }
    }
]


// Dev plugin
const devPlugins =  [
    // Hot module
    new webpack.HotModuleReplacementPlugin(),
    // Avoid stopping the app execution on error
    new webpack.NoEmitOnErrorsPlugin(),
    // CSS Package
    new ExtractTextPlugin({
        filename: 'style.css',
        allChunks: true
    }),
]


// SASS Loader
const sassLoader = {
    includePaths: [path.resolve(__dirname, "./src/styles")]
}


module.exports = {
    devtool: devtool,
    entry: entry,
    output: output,
    module: {
        loaders: loaders
    },
    plugins: devPlugins
};
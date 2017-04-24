const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path')
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const version = require('./package.json').version;

// App entry
const entry =  __dirname + '/src/index.js';


// App js output
const output =  {
  filename: 'page/[name]/index.js',
  chunkFilename: 'chunk/[name].[chunkhash:5].chunk.js',
};


// Source map
const devtool = 'source-map';


// Loader
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
    }
]


// Dev plugin
var devPlugins =  [
    // Hot module
    new webpack.HotModuleReplacementPlugin(),
    // Avoid stopping the app execution on error
    new webpack.NoEmitOnErrorsPlugin(),
    // Open the browser page
    new OpenBrowserPlugin({
        url: 'http://127.0.0.1:3000/'
    }),
    // CSS Package
    new ExtractTextPlugin({
        filename: 'css.css',
        allChunks: true
    }),
]


// dev server
var devServer = {
    contentBase: './server',
    historyApiFallback: false,
    port: 3000, 
    hot: true, // Hot Module Replacement
    inline: true, // Livereload
    host: '0.0.0.0',
};


module.exports = {
    devtool: devtool,
    entry: entry,
    output: {
        path: __dirname + '/server',
        filename: 'app.js',
    },
    module: {
        loaders: loaders
    },
    plugins: devPlugins,
    devServer: devServer
};
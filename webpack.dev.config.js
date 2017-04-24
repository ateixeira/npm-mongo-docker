const path = require('path')
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// App entry
const entry =  __dirname + '/src/index.js';


//App js output
const output =  {
  filename: 'page/[name]/index.js',
  chunkFilename: 'chunk/[name].[chunkhash:5].chunk.js',
};


// Source map
const devtool = 'source-map';


// loader
const loaders = [
    {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
    },{ 
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
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
var express = require('express');
var app = express();
var mongoose = require('mongoose');


// Development server configuration
if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const config = require('./webpack.dev.config.js')
    const compiler = webpack(config)

    app.use(webpackHotMiddleware(compiler))
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }))
}


// MongoDB setup
mongoose.connect("mongodb://mongo:27017");


//routes
app.get('/', function(req, res){
  res.send("Hello World");
});


//Server startup
app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});

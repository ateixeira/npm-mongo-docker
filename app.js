import React from 'react';
import express from 'express';
import mongoose from 'mongoose';
import { Server } from 'http';

import { Provider } from 'react-redux';

const app = express();
const server = new Server(app);
const port = process.env.PORT || 3000;


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
server.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.info("Server running on port " + port);
});
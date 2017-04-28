import React from 'react';
import { Server } from 'http';

import server_config from './config';

// import User from '../models/user'


const app = server_config.app();
const server = new Server(app);
const port = process.env.PORT || 3000;


// Development server configuration
if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const config = require('../../webpack.dev.config.js')
    const compiler = webpack(config)

    app.use(webpackHotMiddleware(compiler))
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }))
}


// Connect to database
server_config.conn_mongo();


// Routes
require('./api-routes')(app);
require('./react-routes')(app);


//Server startup
server.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.info("Server running on port " + port);
});
import React from 'react';
import express from 'express';
import exphbs  from 'express-handlebars';
import mongoose from 'mongoose';
import { Server } from 'http';

import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';

import routes from './src/routes';
import NotFoundPage from './src/components/notfoundpage';
import configureStore from './src/configureStore';

import User from './src/models/user'


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


// Templates configuration
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// MongoDB setup
mongoose.connect("mongodb://mongo:27017/teixeira");


app.get('/signup', function(req, res) {

    let newUser = new User({
        email: "andre.teixeira@gmail.com",
        password: "clarinha"
    });

    newUser.save(function(err) {
        if (err) {
            return res.json({
              success: false,
              code: err.code,
              message: err.message
            });
        }
        res.json({
            success: true,
            message: 'Usuário criado com sucesso.'
        });
    });

});


// Server side rendering shared components and shared routes
app.get('*', (req, res) => {
    match(
        { routes, location: req.url },
        (err, redirectLocation, renderProps) => {

            // in case of error display the error message
            if (err) {
                return res.status(500).send(err.message);
            }

            // in case of redirect propagate the redirect to the browser
            if (redirectLocation) {
                return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            }

            // Create a new Redux store instance
            const store = configureStore();

            // generate the React markup for the current route
            let markup;
            if (renderProps) {
                // if the current route matched we have renderProps
                markup = renderToString(
                    <Provider store={store}>
                        <RouterContext {...renderProps}/>
                    </Provider>
                );

            } else {
                // otherwise we can render a 404 page
                markup = renderToString(<NotFoundPage/>);
                res.status(404);
            }

            // render the index template with the embedded React markup
            return res.render('index', { markup });
        }
    );
});


//Server startup
server.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.info("Server running on port " + port);
});
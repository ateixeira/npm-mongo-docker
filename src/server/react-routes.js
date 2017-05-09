import React from 'react';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';

import configureStore from '../configureStore';
import { getRoutes } from '../routes';

import NotFoundPage from '../components/notfoundpage';


module.exports = function(app){

    // Create a new Redux store instance
    const store = configureStore();
    const routes = getRoutes(store);

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

}
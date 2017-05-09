import React from 'react';
import { Route, IndexRoute, NotFoundRoute } from "react-router";

import App from './containers/app.js';
import Main from './components/main.js';
import Users from './components/users.js';
import Login from './components/login.js';


export const getRoutes = (store) => {
	const authRequired = (nextState, replaceState) => {
		const state = store.getState();

		if (!state.application.isAuthenticated) {
	      	// Not authenticated, redirect to login.
	      	replaceState({
  				pathname: '/login',
  				state: { nextPathname: nextState.location.pathname }
	      	});
	    }
	}

	return (
		<Route path="/" component={App}>
			<Route component={Users} onEnter={authRequired} >
				<Route path="/users" component={Users} onEnter={authRequired} />
			</Route>	
			<Route path="/login" component={Login}/>
		</Route>
	)

}
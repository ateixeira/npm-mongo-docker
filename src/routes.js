import React from 'react';
import { Route, IndexRoute, NotFoundRoute } from "react-router";

import App from './containers/app.js';
import Main from './components/main.js';
import Users from './components/users.js';


export const getRoutes = (store) => {
	const authRequired = (nextState, replaceState) => {
		const state = store.getState();
	}

	return (
		<Route path="/" component={App} onEnter={authRequired}>
			<IndexRoute component={Users} />
			<Route path="/main" component={Main}/>
			<Route path="/users" component={Users}/>
		</Route>
	)

}
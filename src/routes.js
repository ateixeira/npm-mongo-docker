import React from 'react';
import { Route, IndexRoute, NotFoundRoute } from "react-router";

import App from './containers/app.js';
import Main from './components/main.js';
import Users from './components/users.js';


const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Users} />
		<Route path="/main" component={Main}/>
		<Route path="/users" component={Users}/>
	</Route>
);

export default routes;
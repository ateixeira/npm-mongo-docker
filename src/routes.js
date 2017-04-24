import React from 'react';
import { Route, IndexRoute, NotFoundRoute } from "react-router";

import App from './containers/app.js';
import Main from './components/main.js';


const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Main} />
		<Route path="/main" component={Main}/>
	</Route>
);

export default routes;
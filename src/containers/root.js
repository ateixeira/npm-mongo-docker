import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';

import routes from '../routes';
import configureStore from '../configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

export default class Root extends Component {
  render() {
    return (
    	<Provider store={store}>
      		<Router history={browserHistory} routes={routes}/>
      	</Provider>
    );
  }
}

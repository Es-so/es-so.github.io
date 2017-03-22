import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import history from './history';
import { Route, Router, IndexRoute, browserHistory } from 'react-router'
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from 'react-router-redux'

import configureStore from './store';
import App from './components/App';

const initialState = {
};

const store = configureStore(initialState);
const main = window.document.getElementById('__SKdevelop__');
window.store = store;
window.state = store.getState();

console.log('mounting react app ...');  // eslint-disable-line no-console

const root = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)

render(root, main);

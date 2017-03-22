import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import home from './home';
import projects from './projects';
import contact from './contact';

const reducers = combineReducers({
  home,
  projects,
  contact,
  router: routerReducer,
});

export default reducers;

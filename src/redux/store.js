import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {
  responsiveStoreEnhancer,
  calculateResponsiveState,
} from 'redux-responsive';
import { debounce } from 'lodash';

import reducer from './reducers';

if (typeof window === 'undefined') {
  global.window = {};
}

const enhancer = compose(
  responsiveStoreEnhancer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  {}, // initial state
  enhancer
);

window.addEventListener(
  'resize',
  debounce(() => store.dispatch(calculateResponsiveState(window)), 200)
);

export default store;

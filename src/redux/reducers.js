import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';

import appConfig from 'src/config/app.conf';
import counter from './counter';
import intl from './intl';
import project from './project';

const reducer = combineReducers({
  counter,
  intl,
  project,
  browser: createResponsiveStateReducer(
    {
      mobile: appConfig.mediaQuery.tablet,
      tablet: appConfig.mediaQuery.desktop,
    },
    {
      infinity: 'desktop',
      extraFields: () => ({
        width: window.innerWidth,
        height: window.innerHeight,
      }),
    }
  ),
});

export default reducer;

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';
import alarmReducer from './reducers/alarm';

const store = createStore(
  combineReducers({
    auth: authReducer,
    alarm: alarmReducer
  }),
  applyMiddleware(thunk)
);

export default store;
import { combineReducers } from 'redux';

import authReducer from './authReducer';

const reducers = {
  user: authReducer,
};

export default combineReducers(reducers);

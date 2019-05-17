import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers.js';

export default combineReducers({
    authResponse: AuthReducers
});
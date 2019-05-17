import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers.js';
import RegisterReducer from './RegisterReducer';

export default combineReducers({
    authResponse: AuthReducers,
    registerResponse:RegisterReducer
});
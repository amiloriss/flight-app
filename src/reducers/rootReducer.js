import { combineReducers } from 'redux';
import flightData from './reducer';
import filesReducer from './filesReducer';
import authReducer from './authReducer';

export default combineReducers({
    flightData,
    filesReducer,
    authReducer,
});

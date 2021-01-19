import { combineReducers } from 'redux';
import flightData from './reducer';
import filesReducer from './filesReducer';

export default combineReducers({
    flightData,
    filesReducer,
});

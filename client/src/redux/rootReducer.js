import {combineReducers} from 'redux';
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';

//Combine all reducers
export default combineReducers({
    flashMessages,
    auth,
});
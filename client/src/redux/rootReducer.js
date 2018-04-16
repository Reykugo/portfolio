import {combineReducers} from 'redux';
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import skills from "./reducers/skills";

//Combine all reducers
export default combineReducers({
    flashMessages,
    auth,
    skills
});
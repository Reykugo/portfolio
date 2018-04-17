import {combineReducers} from 'redux';
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import skills from "./reducers/skills";
import profileDescription from './reducers/profileDescription'

//Combine all reducers
export default combineReducers({
    flashMessages,
    auth,
    skills,
    profileDescription
});
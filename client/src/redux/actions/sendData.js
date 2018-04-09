//import {GET_HOME_DESCRIPTION} from './types';
import axios from 'axios';

export function setProfileDescription(data){
    return dispatch => {
        return axios.post("/api/data/profileDescription", data);
    }
    
}
//import {GET_HOME_DESCRIPTION} from './types';
import axios from 'axios';

export function setHomeDescription(data){
    return dispatch => {
        return axios.post("/api/data/homeDescription", data);
    }
    
}
//import {GET_HOME_DESCRIPTION} from './types';
import axios from 'axios';


export function getProfileDescription(){
    return dispatch => {
        return axios.get("/api/data/profileDescription");
    }
    
}
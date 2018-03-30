//import {GET_HOME_DESCRIPTION} from './types';
import axios from 'axios';


export function getHomeDescription(){
    return dispatch => {
        return axios.get("/api/data/homeDescription");
    }
    
}
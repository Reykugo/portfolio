import {SET_SKILLS} from './types';
import axios from 'axios';

export function storeSkills(skills){
    return {
        type: SET_SKILLS,
        skills
    }
}
export function getSkills(){
    return dispatch => {
        return axios.get("/api/data/skills").then(response =>{
            dispatch(storeSkills(response.data.skills));
        });
    }
}

export function getProfileDescription(){
    return dispatch => {
        return axios.get("/api/data/profileDescription");
    }
}
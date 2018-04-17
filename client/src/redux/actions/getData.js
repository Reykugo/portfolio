import {SET_SKILLS, SET_PROFILE_DESCRIPTION} from './types';
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

export function storeProfileDescription(description){
    return {
        type: SET_PROFILE_DESCRIPTION,
        description
    }
}

export function getProfileDescription(){
    return dispatch => {
        return axios.get("/api/data/profileDescription").then(response =>{
            dispatch(storeProfileDescription(response.data.profileDescription))
        });
    }
}
//import {GET_HOME_DESCRIPTION} from './types';
import axios from 'axios';

export function setProfileDescription(data){
    return dispatch => {
        return axios.post("/api/data/profileDescription", data);
    }
    
}

export function setSkill(skill, skillCategory){
    return dispatch => {
        return axios.post("/api/data/skill", {category:skillCategory, skill:skill});
    }
}

export function deleteSkill(skillName, skillCategory){
    return dispatch =>{
        return axios.put("/api/data/skill", {category:skillCategory, skillName:skillName});
    }
}
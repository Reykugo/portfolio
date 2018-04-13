//import {GET_HOME_DESCRIPTION} from './types';
import axios from 'axios';

export function setProfileDescription(data){
    return dispatch => {
        return axios.post("/api/data/profileDescription", data);
    }
    
}

export function setSkill(skill, SkillCategory){
    return dispatch => {
        return axios.post("/api/data/skill", {category:SkillCategory, skill:skill});
    }
}
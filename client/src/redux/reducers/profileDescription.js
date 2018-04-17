import {SET_PROFILE_DESCRIPTION} from "../actions/types";

const initialState = ""


export default ( state = initialState, action = {}) =>{
    switch(action.type){
        case SET_PROFILE_DESCRIPTION:
            return action.description
            
            
        default:return state;
    }
}
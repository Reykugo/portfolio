import { SET_SKILLS} from "../actions/types";

const initialState = {}


export default ( state = initialState, action = {}) =>{
    switch(action.type){
        case SET_SKILLS:
            return action.skills
            
        default:return state;
    }
}
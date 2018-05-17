import {GAIN_SUCCESS} from './actionTypes';

export default (state=[], action) => {
    switch(action.type){
        case GAIN_SUCCESS: 
            return action.result;
        default:
            return state;
    }
}
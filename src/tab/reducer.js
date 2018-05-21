import {GAIN_LABEL} from './actionTypes';

export default (state=[], action) => {
    switch(action.type){
        case GAIN_LABEL:
            return action.tab;
        default:
            return state;
    }
}
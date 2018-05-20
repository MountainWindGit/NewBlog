import {DIST_ID} from './actionTypes';

export default (state=[], action) => {
    switch(action.type){
        case DIST_ID:
            return action.dist;
        default: 
            return state;
    }
}
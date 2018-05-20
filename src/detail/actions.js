import {DIST_ID} from './actionTypes';

export const distID = (dist) => {
    return {
        type: DIST_ID,
        dist
    }
}
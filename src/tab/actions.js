import {GAIN_LABEL} from './actionTypes';

export const artGainLabel = (tab) => {
    return {
        type: GAIN_LABEL,
        tab
    }
}

export const artGainTab = () => {
    return (dispatch) => {
        const apiUrl = '/apilabel';
        return fetch(apiUrl).then(res => {
            if(res.status !== 200){
                throw new Error('Fail to get response with status ' + res.status)
            }
            res.json().then(resJson => {
                dispatch(artGainLabel(resJson));
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
    }
}
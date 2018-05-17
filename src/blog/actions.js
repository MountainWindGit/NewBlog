import {GAIN_SUCCESS} from './actionTypes';

export const artGainSuccess = (result) => {
    return {
        type: GAIN_SUCCESS,
        result
    }
}

export const artGain = () => {
    return (dispatch) => {
        const apiUrl = `/show`;
        return fetch(apiUrl).then(res => {
            // console.log(res);
            if(res.status !== 200){
                throw new Error('Fail to get response with status ' + res.status);
            }
            res.json().then(resJson => {
                // console.log(resJson);
                dispatch(artGainSuccess(resJson));
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
    }
}
import {GAIN_SUCCESS} from './actionTypes';

export const artGainSuccess = (result) => {
    return {
        type: GAIN_SUCCESS,
        result
    }
}


export const artGain = (label) => {
    return (dispatch) => {
        console.log(label);
        let apiUrl = '',
            n = Number(label);
        if(typeof label === 'string'){
            apiUrl = `/show?label=${label}`;
        }else if(!isNaN(n)){
            apiUrl = `/show?id=${label}`;
        }else{
            apiUrl = `/show`;
        }
        return fetch(apiUrl).then(res => {
            // console.log(res);
            if(res.status !== 200){
                throw new Error('Fail to get response with status ' + res.status);
            }
            res.json().then(resJson => {
                let resReverse = resJson.reverse();
                dispatch(artGainSuccess(resReverse));
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
    }
}
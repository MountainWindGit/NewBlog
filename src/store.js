import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {reducer as artReducer} from './blog/';
import {reducer as distReducer} from './detail/'

let reducer = combineReducers({
    article: artReducer,
    distID: distReducer
})
//action数据异步函数
let Store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default Store;
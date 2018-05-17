import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {reducer as artReducer} from './blog';

let reducer = combineReducers({
    article: artReducer
})
//action数据异步函数
let Store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default Store;
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {reducer as artReducer} from './list/';
import {reducer as tabReducer} from './tab/';

let reducer = combineReducers({
    article: artReducer,
    tab: tabReducer
})
//action数据异步函数
let Store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default Store;
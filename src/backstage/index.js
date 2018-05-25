import React from 'react';
//路由重定向
import {Redirect} from 'react-router-dom';

export default () => {
    if(!sessionStorage.isLogin){
        return (
            <Redirect to='/admin' />
        )
    }else{
        return (<h1>这是后台管理</h1>)
    }
}
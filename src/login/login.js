import React from 'react';
//异步请求后，路由跳转
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //设置
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    handleSubmit(e){
        e.preventDefault();
        //获取用户名和密码
        let data = {
            username: this.refs.user.value,
            password: this.refs.pass.value
        }
        fetch('/admin',{
            method: 'POST',
            //设置数据传输形式
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            //数据体
            body: `username=${data.username}&password=${data.password}`
        }).then(res => {
            if(res.status !== 200){
                throw new Error('提交异常');
            }
            res.json().then(resJson => {
                //登录成功跳转后台管理页面
                if(resJson.isLogin === 'ok'){
                    sessionStorage.setItem('isLogin',true);
                    this.context.router.history.push('/backstage');
                }
            })
        })
    }
    render(){
        //假如已登录则直接跳转管理页面
        if(sessionStorage.isLogin){
            return (
                <Redirect to='/backstage' />
            )
        }
        return (
            <div className="login-flex">
                <div className="login-box">
                    <h3 className="title">椰子猪的那点事</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="username">
                            <input type="text" name="username" placeholder="用户名" ref="user"/>
                        </div>
                        <div className="password">
                            <input type="password" name="password" placeholder="密码" ref="pass"/>
                        </div>
                        <button type="submit" className="submit">登录</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
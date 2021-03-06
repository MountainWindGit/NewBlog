import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';

//代码分片，按需加载
import asyncComponent from './AsyncComponent';
const HomePage = asyncComponent(() => import("./home/"));
const About = asyncComponent(() => import("./person/"));
const Blog = asyncComponent(() => import("./list/"));
const Details = asyncComponent(() => import("./info/"));
const Login = asyncComponent(() => import("./login/"));
const Backstage = asyncComponent(() => import("./backstage/"));
const NotFound = asyncComponent(() => import("./404/"));

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* //首页 */}
                <Route exact path='/' component={HomePage} />
                {/* //关于我 */}
                <Route path='/about' component={About} />
                {/* //博客页 */}
                <Route path='/blog' component={Blog} />
                {/* //文章页 */}
                <Route path='/article/:id' component={Details} />
                {/* //登录页 */}
                <Route path='/admin' component={Login} />
                {/* //后台编辑页 */}
                <Route path='/backstage' component={Backstage} />
                {/* //404 */}
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

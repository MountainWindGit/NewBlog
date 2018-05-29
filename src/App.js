import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//代码分片，按需加载
import asyncComponent from './AsyncComponent';
const HomePage = asyncComponent(() => import("./home/"));
const About = asyncComponent(() => import("./person/"));
const Blog = asyncComponent(() => import("./list/"));
const Details = asyncComponent(() => import("./info/"));
const Login = asyncComponent(() => import("./login/"));
const Backstage = asyncComponent(() => import("./backstage/"));
const NotFound = asyncComponent(() => import("./404/"));

// import HomePage from './home/';
// import About from './person/';
// import Blog from './list/'
// import Details from './info/';
// import Login from './login/';
// import Backstage from './backstage/';
// import NotFound from './404/';



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

export default App;
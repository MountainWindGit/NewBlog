import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from './home/';
import About from './person/';
import {views as Blog} from './list/';
import Details from './info/';
import {views as Login} from './login/';
import Backstage from './backstage/';
import NotFound from './404/';

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
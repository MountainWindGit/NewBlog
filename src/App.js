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
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={About} />
                <Route path='/blog' component={Blog} />
                <Route path='/article/:id' component={Details} />
                <Route path='/admin' component={Login} />
                <Route path='/backstage' component={Backstage} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
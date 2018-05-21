import React from 'react';
import {Route} from 'react-router-dom';

import HomePage from './home/';
import About from './person/';
import {views as Blog} from './list/';
import Details from './info/';

const App = () => {
    return (
        <React.Fragment>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={About} />
            <Route path='/blog' component={Blog} />
            <Route path='/article/:id' component={Details} />
        </React.Fragment>
    )
}

export default App;
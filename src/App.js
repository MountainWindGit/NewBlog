import React from 'react';
import {Route} from 'react-router-dom';

import HomePage from './home/';
import About from './about/';
import {views as Blog} from './blog/';

const App = () => {
    return (
        <div>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={About} />
            <Route path='/blog' component={Blog} />
        </div>
    )
}

export default App;
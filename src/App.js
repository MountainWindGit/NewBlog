import React from 'react';
import {Route} from 'react-router-dom';

import HomePage from './home/';
import About from './about/';

const App = () => {
    return (
        <div>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={About} />
        </div>
    )
}

export default App;
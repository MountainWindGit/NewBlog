import React from 'react';
import HomePage from './home/';
import {Route} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Route exact path='/' component={HomePage} />
        </div>
    )
}

export default App;
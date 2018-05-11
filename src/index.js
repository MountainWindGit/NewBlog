import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <App />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();

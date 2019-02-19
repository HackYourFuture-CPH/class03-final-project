import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

//A Router wrapper for react-router, it allows you to create multiple Routers sharing the same history.
ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter> , document.getElementById('root'));
     registerServiceWorker();
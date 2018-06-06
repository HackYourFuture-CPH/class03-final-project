import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './components/Navigation.js'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navigation/>
      <App/>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contentform from './components/Contentform';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

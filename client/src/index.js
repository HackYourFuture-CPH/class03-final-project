import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contentform from './Components/Contentform';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

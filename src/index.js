import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './js/App';
import * as serviceWorker from './js/serviceWorker';

ReactDOM.render(
  // Enable react router and work in GitHub Pages
  <BrowserRouter basename={process.env.PUBLIC_URL}><App /></BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

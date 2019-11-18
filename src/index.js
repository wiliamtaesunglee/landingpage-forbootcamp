import React from 'react';
import { render } from 'react-snapshot';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-MJ35FJ8'
}

TagManager.initialize(tagManagerArgs)

render(
<Router>
  <App />
</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

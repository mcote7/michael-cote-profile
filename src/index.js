import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import { createBrowserHistory } from "history";


import { gsap, CSSPlugin, CSSRulePlugin} from "gsap/all";

const history = createBrowserHistory();

gsap.registerPlugin(CSSPlugin, CSSRulePlugin);

ReactDOM.render(
  <Router history={history}>
    <App history={history}/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

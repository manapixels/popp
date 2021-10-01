import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './css/bootstrap-grid.min.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './scenes/Home';
import Explore from './scenes/Explore';
import Pay from './scenes/Pay';
import Stamps from './scenes/Stamps';
import Rewards from './scenes/Rewards';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/stamps">
          <Stamps />
        </Route>
        <Route path="/rewards">
          <Rewards />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import indexRoutes from './routes/index';
import './assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router>
      <Switch>
        {indexRoutes.map((route, key) => (
          <Route exact path={route.path} component={route.component} key={key} />
        ))}
      </Switch>
    </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

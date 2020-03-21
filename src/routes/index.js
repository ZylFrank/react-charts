import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { commonRoutes } from './config';
import App from '../pages/App';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/chart" render={(routeProps) => <App {...routeProps} />} />
      {commonRoutes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Redirect exact from="/" to="/chart" />
      <Redirect to="/404" />
    </Switch>
  </Router>
);

export default AppRouter;

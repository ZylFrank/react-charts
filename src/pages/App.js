import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import BasiceLayout from '../layouts/BasiceLayout';

import { chartRoutes } from '../routes/config';

import './App.css';

function App() {
  return (
    <BasiceLayout>
      <Switch>
        {chartRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            render={(routeProps) => <route.component {...routeProps} />}
          />
        ))}
        <Redirect to="/404" />
      </Switch>
    </BasiceLayout>
  );
}

export default App;

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import BasiceLayout from '../layouts/BasiceLayout';

import { chartRoutes } from '../routes/config';

import './App.css';

const formatRoutes = (parentPath,routes) => routes.map((route) => {
  if (route.redirect) {
    return (<Redirect key={`${parentPath}${route.path}`} to={`${parentPath}${route.redirect}`} />)
  } 
  if (route.routes && route.routes.length > 0) {
    return (
      <Route
        key={`${parentPath}${route.path}`}
        path={`${parentPath}${route.path}`}
        exact={route.exact}
      >
        {formatRoutes(`${parentPath}${route.path}`, route.routes)}
      </Route>
    )
  } 
    return (
      <Route
        key={`${parentPath}${route.path}`}
        path={`${parentPath}${route.path}`}
        exact={route.exact}
        render={(routeProps) => <route.component {...routeProps} />}
      />
    )
});

function App() {
  return (
    <BasiceLayout>
      <Switch>
        {
          formatRoutes('', chartRoutes)
        }
        <Redirect to="/404" />
      </Switch>
    </BasiceLayout>
  );
}

export default App;

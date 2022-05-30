import React from 'react';
import '../styles/App.css'
import {  Redirect, Route, Switch } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router';

const AppRouter = () => {
  const isAuth = false
  return (
    isAuth
    ? <Switch>
        {privateRoutes.map(route =>
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
          />
        )}
        <Redirect to='/posts'/>
      </Switch>
    : <Switch>
        {publicRoutes.map(route =>
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
          />
        )}
        <Redirect to='/login'/>
      </Switch>
  );
};

export default AppRouter;

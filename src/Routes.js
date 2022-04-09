import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import viewsRoutes from 'views/routes';

const Routes = () => {
  return (
    <BrowserRouter basename='/'>
      <Switch>
        {viewsRoutes.map((item, i) => (
          <Route key={i} exact path={item.path} render={() => item.renderer()} />
        ))}
        <Redirect status={404} to={'/not-found-cover'} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

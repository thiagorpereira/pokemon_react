import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Detail from './pages/Detail';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/detail/:pokemon" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}
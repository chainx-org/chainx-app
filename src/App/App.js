import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import Header from './Header';
import routersData from './appRouters';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          {routersData.map(router => (
            <Route exact path={router.path} component={router.component} />
          ))}
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;

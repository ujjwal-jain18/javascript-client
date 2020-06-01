/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import { SnackbarProvider } from './contexts/index';
import {
  Demo,
  InputDemo,
  ChildrenDemo,
  Trainee,
  Login,
  NotFound,
} from './pages/index';
import { AuthRoute, PrivateRoute } from './routes/index';

const ls = require('local-storage');

function App() {
  return (
    <SnackbarProvider>
      {!ls.get('token') ? (
        <Router>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/login' />
            </Route>
            <AuthRoute exact path='/login' component={Login} />
            <PrivateRoute path='/trainee' component={Trainee} />
            <PrivateRoute
              exact
              path='/textfield-demo'
              component={Demo}
            />
            <PrivateRoute exact path='/input-demo' component={InputDemo} />
            <PrivateRoute
              exact
              path='/children-demo'
              component={ChildrenDemo}
            />
            <PrivateRoute exact component={NotFound} />
          </Switch>
        </Router>
      ) : (
        <Router>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/trainee' />
            </Route>
            <PrivateRoute path='/trainee' component={Trainee} />
            <PrivateRoute
              exact
              path='/textfield-demo'
              component={Demo}
            />
            <PrivateRoute exact path='/input-demo' component={InputDemo} />
            <PrivateRoute
              exact
              path='/children-demo'
              component={ChildrenDemo}
            />
            <PrivateRoute exact component={NotFound} />
          </Switch>
        </Router>
      )}
    </SnackbarProvider>
  );
}

export default App;

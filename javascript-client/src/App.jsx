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

function App() {
  return (
    <SnackbarProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/trainee' />
          </Route>
          <AuthRoute exact path='/login' component={Login} />
          <PrivateRoute exact path='/input-demo' component={InputDemo} />
          <PrivateRoute exact path='/textfield-demo' component={Demo} />
          <PrivateRoute exact path='/children-demo' component={ChildrenDemo} />
          <PrivateRoute path='/trainee' component={Trainee} />
          <PrivateRoute component={NotFound} />
        </Switch>
      </Router>
    </SnackbarProvider>
  );
}

export default App;

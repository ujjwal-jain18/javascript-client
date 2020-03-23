/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Switch, BrowserRouter as Router,
} from 'react-router-dom';
import {
  Demo, InputDemo, ChildrenDemo, Trainee, Login, NotFound,
} from './pages/index';
import { AuthRoute, PrivateRoute } from './routes/index';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <AuthRoute path="/login" component={Login} />
          <PrivateRoute path="/input-demo" component={InputDemo} />
          <PrivateRoute path="/textfield-demo" component={Demo} />
          <PrivateRoute path="/children-demo" component={ChildrenDemo} />
          <PrivateRoute exact path="/" component={Trainee} />
          <PrivateRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;

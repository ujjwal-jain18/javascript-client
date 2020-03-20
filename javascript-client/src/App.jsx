/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Switch, BrowserRouter as Router, Route, Redirect
} from 'react-router-dom';
import {
  Demo, InputDemo, ChildrenDemo, TraineeList, Login, NotFound,
} from './pages/index';
import { AuthRoute, PrivateRoute } from './routes/index';
import TraineeDetail from './pages/Trainee/TraineeDetail';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/trainee" />
          </Route>
          <AuthRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/input-demo" component={InputDemo} />
          <PrivateRoute exact path="/textfield-demo" component={Demo} />
          <PrivateRoute exact path="/children-demo" component={ChildrenDemo} />
          <PrivateRoute exact path="/trainee" component={TraineeList} />
          <PrivateRoute exact path="/trainee/:traineeId" component={TraineeDetail} />
          <PrivateRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;

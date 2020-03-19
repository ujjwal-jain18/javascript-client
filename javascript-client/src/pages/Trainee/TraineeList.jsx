/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Route, Switch, Link, BrowserRouter as Router,
} from 'react-router-dom';
import Trainee from './Trainee';
import trainees from './data/trainee';

function TraineeList(props) {
  const { match: { path }, match: { url } } = props;
  return (
    <>
      <Router>
        <Switch>
          <Route path={path} component={Trainee} />
        </Switch>
        <ul>
          {trainees.map(({ name, id }) => (
            <li key={id}>
              <Link to={`${url}/${id}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </Router>
    </>
  );
}
TraineeList.propTypes = {
  match: PropTypes.object.isRequired,
};
export default TraineeList;

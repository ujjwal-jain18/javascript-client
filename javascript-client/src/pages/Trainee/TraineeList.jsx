/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Link, BrowserRouter as Router,
} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { AddDialog, TableComponent } from './Component/index';
import trainees from './data/trainee';

const styles = (theme) => ({
  root: {
    marginLeft: theme.spacing(140),
  },
});
class TraineeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  onSubmit = (data) => {
    this.setState({
      open: false,
    }, () => {
      console.log(data);
    });
  }

  render() {
    const {
      open,
    } = this.state;
    const { match: { url }, classes } = this.props;
    return (
      <>
        <Button
          className={classes.root}
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          ADD TRAINEELIST
          <AddDialog
            open={open}
            onClose={this.handleClose}
            onSubmit={() => this.onSubmit}
          />
        </Button>
        &nbsp;
        <TableComponent
          data={trainees}
          column={[
            {
              field: 'name',
              label: 'Name',
              align: 'center',
            },
            {
              field: 'email',
              label: 'Email-Address',
            },
          ]}
        />
        <Router>
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
}
TraineeList.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default withStyles(styles)(TraineeList);

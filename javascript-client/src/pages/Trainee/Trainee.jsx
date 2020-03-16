/* eslint-disable no-console */
import React from 'react';
import { Button } from '@material-ui/core';
import AddDialog from './Component/index';
import NavBar from '../component/index';


class Trainee extends React.Component {
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
    const { open } = this.state;
    this.setState({ open: false });
    return open;
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
    return (
      <>
        <NavBar />
        <br />
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          ADD TRAINEE
          { open
        && (
          <AddDialog
            open={open}
            onClose={this.handleClose}
            onSubmit={() => this.onSubmit}
          />
        ) }
        </Button>
      </>
    );
  }
}
export default Trainee;

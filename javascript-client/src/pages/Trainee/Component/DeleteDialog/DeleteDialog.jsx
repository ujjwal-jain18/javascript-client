/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { snackbarContext } from './../../../../contexts/snackbarProvider';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@material-ui/core';

const useStyles = () => ({
  button_color: {
    backgroundColor: 'blue',
    color: 'white',
  },
});

function DeleteDialog(props) {
  const { openRemove, onClose, remove, classes } = props;
  return (
    <div>
      <Dialog
        open={openRemove}
        variant='outlined'
        color='primary'
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Remove Trainee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you really want to remove Trainee ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color='primary'>
            Cancel
          </Button>
          <snackbarContext.Consumer>
            {(value) => (
              <Button
                onClick={() => {
                  remove(value);
                }}
                color='primary'
                autoFocus
                className={classes.button_color}
              >
                Delete
              </Button>
            )}
          </snackbarContext.Consumer>
        </DialogActions>
      </Dialog>
    </div>
  );
}
DeleteDialog.propTypes = {
  openRemove: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default withStyles(useStyles)(DeleteDialog);

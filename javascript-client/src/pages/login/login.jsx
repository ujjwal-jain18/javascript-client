/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField, Dialog, DialogActions, InputAdornment, Avatar,
  DialogContent, DialogTitle, Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import * as yup from 'yup';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const styling = (theme) => ({
  Content: {
    display: 'flex',
    flexDirection: 'column',
  },
  Text: {
    whiteSpace: 'pre-line',
  },
  Icon: {
    backgroundColor: theme.palette.secondary.main,
    marginLeft: theme.spacing(16),
  },

});
class Login extends React.Component {
  schema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$/,
      'must contain 8 characters at least one \n uppercase one lowercase and one number'),
  });

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      touched: {
        email: false,
        password: false,
      },
      error: {
        email: '',
        password: '',
      },
    };
  }

  handleChange = (key) => ({ target: { value } }) => {
    this.setState({ [key]: value });
  }

    // eslint-disable-next-line consistent-return
    getError = (field) => {
      const { touched, error } = this.state;
      if (touched[field]) {
        this.schema.validateAt(field, this.state).then(() => {
          if (error[field] !== '') {
            this.setState({
              error: {
                ...error,
                [field]: '',
              },
            });
          }
        }).catch((err) => {
          if (err.message !== error[field]) {
            this.setState({
              error: {
                ...error,
                [field]: err.message,
              },
            });
          }
        });
      }
      return error[field];
    }


  isTouched = (field) => {
    const { touched } = this.state;
    this.setState({
      touched: {
        ...touched,
        [field]: true,
      },
    });
  }

  hasErrors = () => {
    const { error } = this.state;
    let iserror = Object.values(error);
    iserror = iserror.filter((errorMessage) => errorMessage !== '');
    return !!iserror.length;
  }

  render() {
    const { classes } = this.props;
    const {
      error,
    } = this.state;
    return (
      <div className={classes.Content}>
        <Dialog open aria-labelledby="form-dialog-title">
          <Avatar className={classes.Icon}>
            <LockOutlinedIcon />
          </Avatar>
          <DialogTitle id="form-dialog-title" align="center">Login</DialogTitle>
          <DialogContent>
            <TextField
              id="email"
              error={!!error.email}
              label="EmailAddress"
              type="email"
              variant="outlined"
              onChange={this.handleChange('email')}
              helperText={this.getError('email')}
              onBlur={() => this.isTouched('email')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <br />
            <br />
            <TextField
              id="password"
              error={!!error.password}
              label="password"
              type="password"
              variant="outlined"
              className={classes.Text}
              onChange={this.handleChange('password')}
              helperText={this.getError('password')}
              onBlur={() => this.isTouched('password')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VisibilityOffIcon />
                  </InputAdornment>
                ),
              }}

              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              disabled={this.hasErrors()}
              fullWidth
            >
              SIGNIN
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default withStyles(styling)(Login);

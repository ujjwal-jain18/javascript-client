/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Box,
  InputAdornment,
  Avatar,
  Button,
  Typography,
  Container,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import * as yup from 'yup';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const styling = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  box: {
    marginTop: theme.spacing(16),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});
class Login extends React.Component {
  schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required('Email is required'),
    password: yup
      .string()
      .required('password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$/,
        'must contain 8 characters at least one \n uppercase one lowercase and one number',
      ),
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
  };

  // eslint-disable-next-line consistent-return
  getError = (field) => {
    const { touched, error } = this.state;
    if (touched[field]) {
      this.schema
        .validateAt(field, this.state)
        .then(() => {
          if (error[field] !== '') {
            this.setState({
              error: {
                ...error,
                [field]: '',
              },
            });
          }
        })
        .catch((err) => {
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
  };

  isTouched = (field) => {
    const { touched } = this.state;
    this.setState({
      touched: {
        ...touched,
        [field]: true,
      },
    });
  };

  hasErrors = () => {
    const { error } = this.state;
    let iserror = Object.values(error);
    iserror = iserror.filter((errorMessage) => errorMessage !== '');
    return !!iserror.length;
  };

  render() {
    const { classes } = this.props;
    const { error } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <Box mx="auto" p={2} className={classes.box} boxShadow={3}>
          <div className={classes.container}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h4">
              Login
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                label="Email Address"
                id="email"
                margin="normal"
                error={!!error.email}
                fullWidth
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
                variant="outlined"
              />
              <TextField
                label="Password"
                id="password"
                margin="normal"
                type="password"
                error={!!error.password}
                fullWidth
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
                variant="outlined"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={this.hasErrors()}
              >
                Sign In
              </Button>
            </form>
          </div>
        </Box>
      </Container>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default withStyles(styling)(Login);

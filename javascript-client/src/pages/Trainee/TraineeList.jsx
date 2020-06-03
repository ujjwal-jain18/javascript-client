/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { snackbarContext } from './../../contexts/index';
import { Button } from '@material-ui/core';
import callApi from '../../libs/utils/api';
import * as moment from 'moment';
import {
  AddDialog,
  WrapTable,
  EditDialog,
  DeleteDialog,
} from './Component/index';
import { trainees, getDateFormatted } from './data/trainee';

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
      EditOpen: false,
      RemoveOpen: false,
      loader: false,
      orderBy: '',
      order: 'asc',
      traineedata: {},
      data: [],
      editData: {},
      deleteDate: {},
      page: 0,
      rowsPerPage: 10,
    };
  }

  async componentDidMount() {
    const token = localStorage.getItem('token');
    this.setState({
      loader: true,
    });
    const response = await callApi(
      'get',
      '/trainee',
      {
        params: {
          skip: 0,
          limit: 20,
        },
      },
      {
        headers: {
          authorization: token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.status === 'ok') {
      this.setState({
        rowsPerPage: 20,
        data: response.data.records,
        loader: false,
      });
    } else {
      const value = this.context;
      value(response.message, 'error');
      this.setState({
        loader: false,
      });
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSort = (field) => (event) => {
    const { order } = this.state;
    this.setState({
      orderBy: field,
      order: order === 'asc' ? 'desc' : 'asc',
    });
  };

  handleSelect = (element) => (event) => {
    this.setState({
      traineedata: element,
    });
  };

  handleChangePage = (event, newPage) => {
    this.setState({
      page: newPage,
    });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      page: 0,
      rowsPerPage: event.target.value,
    });
  };

  handleDeleteDialogOpen = (element) => (event) => {
    this.setState({
      RemoveOpen: true,
      deleteData: element,
    });
  };

  handleRemoveClose = () => {
    this.setState({
      RemoveOpen: false,
    });
  };

  handleRemove = (value) => {
    const Date_compare = '2019-02-14T18:15:11.778Z';
    const { deleteData } = this.state;
    const { createdAt } = deleteData;
    const isAfter = moment(createdAt).isAfter(Date_compare);
    this.setState({
      RemoveOpen: false,
    });
    const message = isAfter
      ? 'This is Error Message'
      : 'This is Success Message';
    const status = isAfter ? 'error' : 'success';
    value(message, status);
    console.log('DELETE ITEM');
    console.log(deleteData);
  };

  handleEditDialogOpen = (element) => (event) => {
    this.setState({
      EditOpen: true,
      editData: element,
    });
  };

  handleEditClose = () => {
    this.setState({
      EditOpen: false,
    });
  };

  handleEdit = (data, value) => {
    this.setState(
      {
        EditOpen: false,
      },
      () => {
        console.log('Edit Data');
        console.log(data);
      }
    );
    const message = 'This is Success Message';
    const status = 'success';
    value(message, status);
  };

  onSubmit = (data) => {
    this.setState(
      {
        open: false,
      },
      () => {
        console.log(data);
      }
    );
  };

  render() {
    const {
      open,
      orderBy,
      order,
      editData,
      data,
      page,
      loader,
      rowsPerPage,
      EditOpen,
      RemoveOpen,
    } = this.state;
    const {
      match: { url },
      classes,
    } = this.props;
    return (
      <>
        <Button
          className={classes.root}
          variant='outlined'
          color='primary'
          onClick={this.handleClickOpen}
        >
          ADD TRAINEELIST
        </Button>
        &nbsp;
        <AddDialog
          open={open}
          onClose={this.handleClose}
          onSubmit={() => this.onSubmit}
        />
        <EditDialog
          Editopen={EditOpen}
          handleEditClose={this.handleEditClose}
          handleEdit={() => this.handleEdit}
          data={editData}
        />
        <DeleteDialog
          openRemove={RemoveOpen}
          onClose={this.handleRemoveClose}
          remove={this.handleRemove}
        />
        <WrapTable
          loader={loader}
          datalength={data.length}
          data={data}
          column={[
            {
              field: 'name',
              label: 'Name',
            },
            {
              field: 'email',
              label: 'Email-Address',
              format: (value) => value && value.toUpperCase(),
            },
            {
              field: 'createdAt',
              label: 'Date',
              align: 'right',
              format: getDateFormatted,
            },
          ]}
          actions={[
            {
              Icon: <EditIcon />,
              handler: this.handleEditDialogOpen,
            },
            {
              Icon: <DeleteIcon />,
              handler: this.handleDeleteDialogOpen,
            },
          ]}
          onSort={this.handleSort}
          orderBy={orderBy}
          order={order}
          onSelect={this.handleSelect}
          count={100}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
        <Router>
          <ul>
            {trainees.map(({ name, id }) => (
              <li key={id}>
                <Link to={`${url}/${id}`}>{name}</Link>
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
TraineeList.contextType = snackbarContext;

/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = () => ({
  table: {
    minWidth: 650,
  },
  header: {
    color: 'grey',
  },
});

function TableComponent(props) {
  const {
    classes, data, column,
  } = props;

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              column.map(({ align, label }) => (
                <TableCell
                  className={classes.header}
                  align={align}
                >
                  {label}
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ name, id, email }) => (
            <TableRow key={id}>
              <TableCell align={column[0].align}>
                {name}
              </TableCell>
              <TableCell>{email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
TableComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  column: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default withStyles(useStyles)(TableComponent);

/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableSortLabel from "@material-ui/core/TableSortLabel";

const useStyles = (theme) => ({
  table: {
    minWidth: 650,
  },
  header: {
    color: "grey",
  },
  cover: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
});

function TableComponent(props) {
  const { classes, data, column, onSort, orderBy, order, onSelect } = props;

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow >
            {column.map((col) => (
              <TableCell
                className={classes.header}
                align={col.align}
                sortDirection={orderBy === col.label ? order : false}
              >
                <TableSortLabel
                  active={orderBy === col.label}
                  direction={orderBy === col.label ? order : "asc"}
                  onClick={onSort(col.label)}
                >
                  {col.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((element) => (
            <TableRow key={element.id} className={classes.cover} hover onMouseEnter={onSelect(element)}>
              {column.map(({ field, align, format }) => (
                <TableCell align={align} >
                  {format !== undefined
                    ? format(element[field])
                    : element[field]}
                </TableCell>
              ))}
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
  orderBy: PropTypes.string,
  order: PropTypes.string,
  onSort: PropTypes.func,
};
TableComponent.defaultProps = {
  orderBy: "",
  order: "asc",
  onSort: () => {},
};
export default withStyles(useStyles)(TableComponent);

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Div, Button1 } from './style';

function ButtonField(props) {
  const { disabled } = props;
  return (
    <>
      <Div>
        <Button1 type="button">
          <b>
            Cancel
          </b>
        </Button1>
        <Button className={(disabled === false) ? 'noerror' : 'error'} type="button" disabled={disabled}>Submit</Button>
      </Div>
    </>
  );
}
ButtonField.propTypes = {
  disabled: PropTypes.bool,
};
ButtonField.defaultProps = {
  disabled: false,
};
export default ButtonField;

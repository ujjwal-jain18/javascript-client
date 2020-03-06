import React from 'react';

import PropTypes from 'prop-types';
import { Select, option } from './style';

function SelectField(props) {
  const {
    input, error, onChange, options,
  } = props;
  const { defaultText } = props;
  return (
    <>
      <p>
        <b>{input}</b>
      </p>
      <Select onChange={onChange} error={error}>
        { defaultText && <option>{defaultText}</option> }
        {
          options && options.length
          && options.map(({ value, label }) => <option key={label} value={value}>{label}</option>)
        }
      </Select>
    </>
  );
}

export default SelectField;

SelectField.propTypes = {
  error: PropTypes.string,
  onChange: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  input: PropTypes.string.isRequired,
  defaultText: PropTypes.string,
};
SelectField.defaultProps = {
  error: '',
  options: [],
  defaultText: 'Select',
};

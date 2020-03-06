import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
import Input from './style';

function RadioGroup(props) {
  const {
    input, error, onChange, options,
  } = props;
  return (
    <>
      <p>
        <b>{input}</b>
      </p>
      { options && options.length && options.map(({ value, label }) => (
        <Fragment key={label}>
          <Input type="radio" name="sport" value={value} onChange={onChange} error={error} />
          { label }
          <br />
        </Fragment>
      ))}
    </>
  );
}

export default RadioGroup;

RadioGroup.propTypes = {
  error: PropTypes.string,
  onChange: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  input: PropTypes.string.isRequired,
};
RadioGroup.defaultProps = {
  error: '',
  options: [],
};

import React from 'react';

import PropTypes from 'prop-types';

import { Input, Div1 } from './style';

function TextField(props) {
  const {
    input, arg, value, dis, error,
  } = props;
  return (
    <>
      <p><b>{ input }</b></p>
      <Input className={error ? 'error' : ''} type="text" name={arg} placeholder={arg} disabled={dis} max={value} />
      <Div1 className={error ? 'error' : 'noerror'}>
        <p>Could not be greater than</p>
      </Div1>
    </>
  );
}
TextField.propTypes = {
  input: PropTypes.string.isRequired,
  arg: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dis: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};
export default TextField;

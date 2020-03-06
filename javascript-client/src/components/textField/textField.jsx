import React from 'react';

import PropTypes from 'prop-types';

import { Input, Div1 } from './style';

function TextField(props) {
  const {
    input, arg, dis, error, onChange,
  } = props;
  return (
    <>
      <p><b>{ input }</b></p>
      <Input className={error ? 'error' : ''} type="text" name={arg} placeholder={arg} disabled={dis} onChange={onChange} />
      <Div1 className={error ? 'error' : 'noerror'}>
        <p>Could not be greater than</p>
      </Div1>
    </>
  );
}
TextField.propTypes = {
  input: PropTypes.string,
  arg: PropTypes.string,
  dis: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.string.isRequired,
};
TextField.defaultProps = {
  input: '',
  arg: '',
  dis: '',
  error: '',
};
export default TextField;

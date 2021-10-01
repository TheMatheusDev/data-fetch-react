import P from 'prop-types';
import './styles.css';
import React from 'react';

export const Button = ({ text, handleClick, disabled = false }) => (
  <button className="button" onClick={handleClick} disabled={disabled}>
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  handleClick: P.func.isRequired,
  disabled: P.bool,
};

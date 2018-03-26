import React, { Component } from 'react';
import './button-styles.css';
import PropTypes from 'prop-types';


const Button = (props) => {
  const {label} = props;

  return (
    <button 
      className="button"
    >
      {label}
    </button>
  )
};

Button.propTypes = {
  label: PropTypes.string,
}

export default Button;
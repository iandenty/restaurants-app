import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './hero-styles.css';


const Hero = (props) => {
  return (
    <div className="hero">
      <div className="hero__content">
        {props.children}
      </div>
    </div>
  );
}

export default Hero;

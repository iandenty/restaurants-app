import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './title-styles.css';

const Title = (props) => {
  const {
    classes, 
    bold,
    content
  } = props; 

  return (
    <h1 className={`title ${classes || ''}`}>
      {content}
      { bold && 
        <span className="title__bold">{bold}</span>
      }
    </h1>
  )
}

Title.propTypes = {
  content: PropTypes.string,
  bold: PropTypes.string
};

export default Title;
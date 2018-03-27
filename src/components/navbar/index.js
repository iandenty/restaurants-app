import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// Styles
import './navbar-styling.css';

// SVGs
import logoHorizontal from './logo-horizontal.svg'
import logoWordmark from './logo-wordmark.svg'
import userIcon from './user-icon.svg'

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar__content">
          <Link className="navbar__icon navbar__icon--horizontal" to="/">
            <img src={logoHorizontal} className="App-logo" alt="logo" />
          </Link>
          <Link className="navbar__icon navbar__icon--wordmark" to="/">
            <img src={logoWordmark} className="App-logo" alt="logo" />
          </Link>
          {/* TODO: Create seperate user component */}
          <div className="navbar__user-info">
            <button className="navbar__user-button">
              <img 
                src={userIcon} 
                className="navbar__user-icon" 
                alt="User icon" 
              />
              <span className="navbar__user-name">James Storer</span>
            </button>
            <button className="navbar__user-button navbar__user-button--last">
              <img 
                src="country@3x.png" 
                className="navbar__language-icon" 
                alt="Language English United Kingdom" 
              />
            </button>  
          </div>
        </div>
      </nav>
    ); 
  }
};

export default NavBar;

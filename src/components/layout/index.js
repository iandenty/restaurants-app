import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './layout-styles.css';

// Components
import Hero from 'components/hero';
import NavBar from 'components/navbar';


class Layout extends Component {
  static propTypes = {
    heroContent: PropTypes.element,
    content: PropTypes.element,
  }

  componentDidMount() {
    const {title} = this.props;
    document.title = title || 'Deliveroo app';
  }

  render() {
    const {
      nav,
      heroContent,
      content
    } = this.props;

    return (
      <div className="layout">
        <header className="layout__header">
          <NavBar />
          <Hero>
            {heroContent}
          </Hero>
        </header>
        <main className="layout__content">
          {content}
        </main>
      </div>
    );
  }
};

export default Layout;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './layout-styles.css';

class Layout extends Component {
  static propTypes = {
    nav: PropTypes.element,
    header: PropTypes.element,
    content: PropTypes.element,
  }

  componentDidMount() {
    const {title} = this.props;
    document.title = title || 'Deliveroo app';
  }

  render() {
    const {
      nav,
      header,
      content
    } = this.props;

    return (
      <div className="layout">
        {nav}
        {header}
        <main className="layout__content">
          {content}
        </main>
      </div>
    );
  }
};

export default Layout;

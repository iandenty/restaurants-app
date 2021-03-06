import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import classNames from 'classnames';

// Styles
import './restaurants-list-item-styling.css';


class RestaurantsListItem extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    tags: PropTypes.array
  }

  state = {
    loading: true
  }

  handleOnload = () => {
    this.setState({loading: false});
  }

  render() {
    const {
      id,
      name,
      image,
      price,
      tags
    } = this.props;

    const classes = classNames({'restaurants-list-item__image--loading': this.state.loading});

    const slug = slugify(name);

    return (
      <li className="restaurants-list-item">
        <Link className="restaurants-list-item__link" to={`/restaurants/${slug}`}>
          <img 
            src={image} 
            className={`restaurants-list-item__image ${classes}`}
            alt={`Food from ${name}`}
            onLoad={this.handleOnload}
          />
          <h3 className="restaurants-list-item__title">{name}</h3>
          <ul className="restaurants-list-item__tags">
            {tags.map(tag => (
              <li
                key={tag} 
                className="restaurants-list-item__tag"
              >
                {tag}
              </li>
            ))}
              <li className="restaurants-list-item__price">{'£'.repeat(price)}</li>
          </ul>
        </Link>
      </li>
    ); 
  }
};

export default RestaurantsListItem;

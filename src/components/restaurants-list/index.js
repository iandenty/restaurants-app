import React, { Component } from 'react';

// Styles
import './restaurants-list-styling.css';

// Components
import RestaurantListItem from 'components/restaurants-list-item';

class RestaurantsList extends Component {
  state = {
    loading: true,
    error: false,
    data: []
  }

  async componentDidMount() {
    const restaurants = await fetch("restaurants.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          data
        });
      })
      .catch(error => {
        this.setState({error: true})
        console.error(error);
      });
  }

  render() {
    const {neighborhood, restaurants} = this.state.data;

    return (
      <div className="restaurants-list">
        { restaurants && restaurants.length > 0 &&
          <div>
            <h2 className="restaurants-list__title">
              {restaurants.length + 1} restaurants can deliver to {neighborhood}
            </h2>
            <ul className="restaurants-list__list">
              { 
                restaurants.map(restaurant => (
                  <RestaurantListItem  key={restaurant.id} {...restaurant} />
                ))
              }
            </ul>
          </div>
        }
        {/* If no results return */}
        { restaurants && restaurants.length === 0 && 
          <p>
            Sorry :(, looks like there aren't yet any restaurants delivering
            in you area, check back soon!
          </p>
        }
      </div>
    ); 
  }
};

export default RestaurantsList;

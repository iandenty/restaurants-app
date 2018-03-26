import React from 'react';
import queryString from 'query-string';

// Components
import Button from 'components/button';
import Layout from 'components/layout';
import RestaurantsList from 'components/restaurants-list';
import Title from 'components/title';

const RestaurantsPage = (props) => {
  const parms = queryString.parse(props.location.search);
  const { neighborhood } = parms;

  const title = neighborhood ? 
    `Delivering to ${neighborhood.charAt(0).toUpperCase()}${neighborhood.slice(1)}` : 
    'Restaurants';
  
  const heroContent = <div>
    <Title content="Restaurants delivering to" bold={neighborhood || 'Fitzrovia'} />
    <Button label="Change location"/>
  </div>;

  return (
    <Layout 
      content={<RestaurantsList />}
      title={title}
      heroContent={heroContent}
    />
  );
};

export default RestaurantsPage;
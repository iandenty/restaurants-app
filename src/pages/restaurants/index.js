import React from 'react';
import queryString from 'query-string';

// Components
import Layout from 'components/layout';

const RestaurantsPage = (props) => {
  const parms = queryString.parse(props.location.search);
  const { address } = parms;

  const title = address ? 
    `Delivering to ${address.charAt(0).toUpperCase()}${address.slice(1)}` : 
    'Restaurants';

  return (
    <Layout 
      content={<p>Hello world!</p>}
      title={title}
    />
  );
};

export default RestaurantsPage;
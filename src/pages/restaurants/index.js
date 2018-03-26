import React from 'react';
import queryString from 'query-string';

// Components
import Button from 'components/button';
import Layout from 'components/layout';
import Title from 'components/title';

const RestaurantsPage = (props) => {
  const parms = queryString.parse(props.location.search);
  const { address } = parms;

  const title = address ? 
    `Delivering to ${address.charAt(0).toUpperCase()}${address.slice(1)}` : 
    'Restaurants';
  
  const heroContent = <div>
    <Title content="Restaurants delivering to" bold={address || 'Fitzrovia'} />
    <Button label="Change location"/>
  </div>;

  return (
    <Layout 
      content={<p>Hello world!</p>}
      title={title}
      heroContent={heroContent}
    />
  );
};

export default RestaurantsPage;
import React from 'react';

// Components
import Layout from 'components/layout';
import Title from 'components/title';

const RestaurantDetailPage = (props) => {
  const heroContent = <Title bold={props.match.params.slug} />;

  return (
    <Layout 
      title={props.match.params.id}
      heroContent={heroContent}
    />
  );
};

export default RestaurantDetailPage;
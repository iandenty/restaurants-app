import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

// Components 
import RestaurantsPage from './pages/restaurants';
import RestaurantDetailPage from './pages/restaurant-detail';

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/restaurants" />)} />          
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route exact path="/restaurants/:slug" component={RestaurantDetailPage} />
      </Switch>
    </div>
  </Router>
)

export default App;

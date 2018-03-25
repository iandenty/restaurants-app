import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components 
import RestaurantsPage from './pages/restaurants';

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={RestaurantsPage} />
      </Switch>
    </div>
  </Router>
)

export default App;

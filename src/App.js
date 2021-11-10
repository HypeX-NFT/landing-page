/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import '@material-tailwind/react/tailwind.css';

function App() {
  return (
    <div className="bg-dark-blue-HypeX">
      <Router>
        <div className="App">
          <Switch>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

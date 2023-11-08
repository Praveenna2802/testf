


import React from 'react';
import './App.css'; // Import your CSS styles if needed
import { Switch } from 'react-router';

import { BrowserRouter, Route} from 'react-router-dom';
import News from './news';
import Nav from './nav';
import LoginPage from './LoginPage'; // Import the LoginPage component
import RegisterPage from './RegisterPage'; // Import the RegisterPage component


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/login">
            <LoginPage /> 
          </Route>
          <Route path="/register">
            <RegisterPage /> 
          </Route>
          <Route path="/Apple">
            <News newsName="iphone" />
          </Route>
          <Route path="/Tesla">
            <News newsName="tesla" />
          </Route>
          <Route path="/Bitcoin">
            <News newsName="bitcoin" />
          </Route>
          <Route path="/Nasa">
            <News newsName="nasa" />
          </Route>
          <Route path="/upsc">
            <News newsName="upsc" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;



import React from 'react';
import './App.css'; // Import your CSS styles if needed
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './news';
import Nav from './nav';
import LoginPage from './LoginPage'; // Import the LoginPage component
import RegisterPage from './RegisterPage'; // Import the RegisterPage component

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/Apple" element={<News newsName="iphone" />} />
          <Route path="/Tesla" element={<News newsName="tesla" />} />
          <Route path="/Bitcoin" element={<News newsName="bitcoin" />} />
          <Route path="/Nasa" element={<News newsName="nasa" />} />
          <Route path="/upsc" element={<News newsName="upsc" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;

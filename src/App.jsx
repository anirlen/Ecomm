import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sign from './pages/SignIn';
import Buy from './pages/Buy';
import Sell from './pages/Sell';





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/SignIn" element={<Sign/>} />
        <Route path="/Buy" element={<Buy/>} />
        <Route path="/Sell" element={<Sell/>} />



      </Routes>
    </BrowserRouter>
  );
};

export default App;

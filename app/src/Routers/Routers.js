import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Favorites from '../Pages/Favorites';


function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/favorites" element={ <Favorites /> } />
    </Routes>
  );
}

export default Routers;

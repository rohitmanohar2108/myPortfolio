import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Browse from './Browse';

const Body = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Browse />} />
        
      </Routes>
    </Router>
  );
};

export default Body;

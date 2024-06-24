import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Browse from './Browse';
import Projects from './Projects';
import Contact from './Contact';

const Body = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Body;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Include Google Fonts link in the head of your index.jsx file
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

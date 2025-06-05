// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddAnime from './components/AddAnime';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AddAnime />} />
    </Routes>
  );
};

export default App;

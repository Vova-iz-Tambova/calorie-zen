import React from 'react';
import './App.css';
import Header from './Header';
import Diary from './Diary';
// import { BrowserRouter } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Header />} /> */}
      <Route path="/" element={<Diary />} />
    </Routes>
  );
}

export default App;
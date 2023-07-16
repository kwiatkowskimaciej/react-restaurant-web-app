import './App.css';
import './queries.css'
import React from 'react';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import ReservationsPage from './components/ReservationsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />;
      <Route path="/reservations" element={<ReservationsPage />} />
    </Routes>
  );
}

export default App;

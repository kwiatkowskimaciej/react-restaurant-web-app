import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import ReservationPage from './components/ReservationsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />;
      <Route path="/reservations" element={<ReservationPage />} />
    </Routes>
  );
}

export default App;

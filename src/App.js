import './App.css';
import './queries.css';
import React from 'react';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import ReservationsPage from './components/ReservationsPage';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />;
      <Route path="/reservations" element={<ReservationsPage />} />
      <Route path="/reservations/booking-confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
}

export default App;

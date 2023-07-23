import './App.css';
import './queries.css';
import './form.css';
import './booking-confirmation.css';
import React from 'react';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import ReservationsPage from './components/ReservationsPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />;
      <Route path="/reservations" element={<ReservationsPage />} />
      <Route
        path="/reservations/booking-confirmed"
        element={<ConfirmedBooking />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

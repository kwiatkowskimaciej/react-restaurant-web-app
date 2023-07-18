import React, { useEffect, useReducer, useState } from 'react';
import Header from './Header';
import ReservationForm from './ReservationsForm';
import { fetchAPI, submitAPI } from '../reservationsAPI';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export const reducer = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return action.times;
  } else {
    return state;
  }
};

const ReservationsPage = () => {
  const [availableTimes, dispatch] = useReducer(reducer, []);
  const [selectedTime, setSelectedTime] = useState('');
  const [initializing, setInitializing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeTimes = async () => {
      const today = new Date();
      const times = await fetchAPI(today);
      dispatch({ type: 'UPDATE_TIMES', times });
      setInitializing(false);
    };

    initializeTimes();
  }, []);

  const updateTimes = async (selectedDate) => {
    const dateObj = new Date(selectedDate);
    const availableTimes = await fetchAPI(dateObj);
    dispatch({ type: 'UPDATE_TIMES', times: availableTimes });
  };

  if (initializing) {
    return <div role="status">Loading...</div>;
  }

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate('booking-confirmed', { state: formData });
    }
  };

  return (
    <React.Fragment>
      <Header />
      <main>
        <div className="reservation-landing">
          <div className="container">
            <div className="page-title">
              <h1 id="reservation-page-title">Table Reservation</h1>
              <h2 id="reservation-page-subtitle">
                Book a table in your favourite restaurant
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <ReservationForm
            availableTimes={availableTimes}
            updateTimes={updateTimes}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            submitForm={submitForm}
          />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default ReservationsPage;

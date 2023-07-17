import React, { useEffect, useReducer, useState } from 'react';
import Header from './Header';
import ReservationForm from './ReservationsForm';
import { fetchAPI, submitAPI } from '../reservationsAPI';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate()

  useEffect(() => {
    const initializeTimes = async () => {
      const today = new Date();
      const times = await fetchAPI(today);
      dispatch({ type: 'UPDATE_TIMES', times });
      setInitializing(false)
    };

    initializeTimes();
  }, []);

  const updateTimes = async (selectedDate) => {
    const dateObj = new Date(selectedDate);
    const availableTimes = await fetchAPI(dateObj);
    dispatch({ type: 'UPDATE_TIMES', times: availableTimes });
  };

  if (initializing) {
    return <div>Loading...</div>
  }

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate('booking-confirmed')
    }
  }

  return (
    <React.Fragment>
      <Header />
      <h1>Reservations Page</h1>
      <ReservationForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        submitForm={submitForm}
      />
    </React.Fragment>
  );
};

export default ReservationsPage;

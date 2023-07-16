import React, { useReducer } from 'react';
import Header from './Header';
import ReservationForm from './ReservationsForm';

const reducer = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return action.times
  } else {
    return state;
  }
}

const initializeTimes = () => {
  return '';
};

const ReservationPage = () => {
  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes);

  const updateTimes = (times) => {
    dispatch( {type: "UPDATE_TIMES", times})
  };

  return (
    <React.Fragment>
      <Header />
      <h1>ReservationPage</h1>
      <ReservationForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
      />
    </React.Fragment>
  );
};

export default ReservationPage;

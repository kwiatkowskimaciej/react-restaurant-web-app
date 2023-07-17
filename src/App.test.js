import { render, screen } from '@testing-library/react';
import ReservationsPage, { initializeTimes, reducer } from './components/ReservationsPage';
import { BrowserRouter } from 'react-router-dom';

test('Renders the ReservationPage heading', () => {
  render(
    <BrowserRouter>
      <ReservationsPage />
    </BrowserRouter>
  );
  const linkElement = screen.getByText('Reservations Page');
  expect(linkElement).toBeInTheDocument();
});

test('initializeTimes function returns the correct expected value', () => {
  const expectedValue = '';
  const result = initializeTimes();
  expect(result).toEqual(expectedValue);
});

test('updateTimes function returns the same value as state', () => {
  const times = '18:00';
  const initialState = '';
  const action = { type: 'UPDATE_TIMES', times };
  const result = reducer(initialState, action);
  expect(result).toEqual(times);
})

import { render, screen, fireEvent } from '@testing-library/react';
import ReservationsPage from './components/ReservationsPage';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import * as reservationsAPI from './reservationsAPI';

test('Renders the ReservationPage heading', async () => {
  let component;
  await act(async () => {
    component = render(
      <BrowserRouter>
        <ReservationsPage />
      </BrowserRouter>
    );
  });
  const title = component.getByText('Reservations Page');
  expect(title).toBeInTheDocument();
});

test('initializeTimes function returns values', async () => {
  let component;
  await act(async () => {
    component = render(
      <BrowserRouter>
        <ReservationsPage />
      </BrowserRouter>
    );
  });

  const loading = component.queryByText('Loading...');
  expect(loading).not.toBeInTheDocument();

  const selectElement = component.getByLabelText('Available times');
  const options = selectElement.querySelectorAll('option');
  expect(options.length).toBeGreaterThan(0);
});

test('updateTimes should return the same value provided in the state', async () => {
  const selectedDate = '2023-07-27';

  const fakeTimes = ['18:00', '19:00', '20:00', '21:00'];
  jest.spyOn(reservationsAPI, 'fetchAPI').mockResolvedValue(fakeTimes);

  let component;
  await act(async () => {
    component = render(
      <BrowserRouter>
        <ReservationsPage />
      </BrowserRouter>
    );
  });

  await act(async () => {
    const dateInput = component.getByLabelText('Choose date');
    fireEvent.change(dateInput, { target: { value: selectedDate } });
  });

  const selectElement = component.getByLabelText('Available times');
  const options = selectElement.querySelectorAll('option');
  const values = Array.from(options).map((option) => option.value);

  expect(values).toEqual(await reservationsAPI.fetchAPI(new Date(selectedDate)));
});

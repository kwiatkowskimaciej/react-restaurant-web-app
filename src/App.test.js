import { render, screen, fireEvent, userEvent } from '@testing-library/react';
import ReservationsPage from './components/ReservationsPage';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import * as reservationsAPI from './reservationsAPI';
import ReservationForm from './components/ReservationsForm';

test('Renders the ReservationPage heading', async () => {
  let component;
  await act(async () => {
    component = render(
      <BrowserRouter>
        <ReservationsPage />
      </BrowserRouter>
    );
  });
  const title = component.getByText('Table Reservation');
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

  const selectElement = component.getByLabelText('Time*');
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
    const dateInput = component.getByLabelText('Date*');
    fireEvent.change(dateInput, { target: { value: selectedDate } });
  });

  const selectElement = component.getByLabelText('Time*');
  const options = selectElement.querySelectorAll('option');
  const values = Array.from(options).map((option) => option.value);
  //Remove placeholder
  values.shift();

  expect(values).toEqual(
    await reservationsAPI.fetchAPI(new Date(selectedDate))
  );
});

describe('ReservationForm Component', () => {
  test('Renders the form with correct attributes', async () => {
    let component;
    await act(async () => {
      component = render(
        <BrowserRouter>
          <ReservationForm />
        </BrowserRouter>
      );
    });

    const dateInput = component.getByLabelText('Date*');
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('id', 'date');

    const timeSelect = component.getByLabelText('Time*');
    expect(timeSelect).toHaveAttribute('id', 'time');
    expect(timeSelect).toHaveAttribute('name', 'time');

    const guestsInput = component.getByLabelText('Number of guests*');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('name', 'guests');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('id', 'guests');

    const occasionSelect = component.getByLabelText('Occasion');
    expect(occasionSelect).toHaveAttribute('id', 'occasion');
    expect(occasionSelect).toHaveAttribute('name', 'occasion');

    const indoorRadio = component.getByLabelText('Indoor');
    expect(indoorRadio).toHaveAttribute('type', 'radio');
    expect(indoorRadio).toHaveAttribute('name', 'location');
    expect(indoorRadio).toHaveAttribute('value', 'indoor');
    expect(indoorRadio).toBeChecked();

    const outdoorRadio = component.getByLabelText('Outdoor');
    expect(outdoorRadio).toHaveAttribute('type', 'radio');
    expect(outdoorRadio).toHaveAttribute('name', 'location');
    expect(outdoorRadio).toHaveAttribute('value', 'outdoor');
    expect(outdoorRadio).not.toBeChecked();

    const commentsTextarea = component.getByLabelText('Comments');
    expect(commentsTextarea).toHaveAttribute('id', 'comments');
    expect(commentsTextarea).toHaveAttribute('name', 'comments');

    const nameInput = component.getByLabelText('Name*');
    expect(nameInput).toHaveAttribute('type', 'text');
    expect(nameInput).toHaveAttribute('id', 'name');
    expect(nameInput).toHaveAttribute('name', 'name');

    const lastNameInput = component.getByLabelText('Last Name*');
    expect(lastNameInput).toHaveAttribute('type', 'text');
    expect(lastNameInput).toHaveAttribute('id', 'lastName');
    expect(lastNameInput).toHaveAttribute('name', 'lastName');

    const emailInput = component.getByLabelText('Email*');
    expect(emailInput).toHaveAttribute('type', 'text');
    expect(emailInput).toHaveAttribute('id', 'email');
    expect(emailInput).toHaveAttribute('name', 'email');

    const phoneNumberInput = component.getByLabelText('Phone number');
    expect(phoneNumberInput).toHaveAttribute('type', 'text');
    expect(phoneNumberInput).toHaveAttribute('id', 'phoneNumber');
    expect(phoneNumberInput).toHaveAttribute('name', 'phoneNumber');
  });
});

test('Should call updateTimes when date field changes', () => {
  const updateTimes = jest.fn();
  render(<ReservationForm updateTimes={updateTimes} />);

  fireEvent.change(screen.getByLabelText('Date*'), {
    target: { value: '2023-07-19' },
  });

  expect(updateTimes).toHaveBeenCalledWith('2023-07-19');
});

describe('Reservation', () => {
  it('should render Reservation component correctly', async () => {
    let component;
    await act(async () => {
      component = render(
        <BrowserRouter>
          <ReservationsPage />
        </BrowserRouter>
      );
    });

    const detailsHeader = component.getByText('Reservation details');
    expect(detailsHeader).toBeInTheDocument();

    const contactHeader = component.getByText('Contact information');
    expect(contactHeader).toBeInTheDocument();

    const submit = component.getByText('Make Your Reservation');
    expect(submit).toBeInTheDocument();
  });
});

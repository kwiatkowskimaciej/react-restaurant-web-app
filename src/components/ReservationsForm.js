import { useState } from 'react';

const ReservationForm = (props) => {
  const [resDate, setResDate] = useState(new Date());
  const [guestsNumber, setGuestsNumber] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    numberOfGuests: null,
    occasion: 'Birthday',
  });

  const handleSubmit = (e) => {
    setFormData({
      ...formData,
      date: resDate,
      time: props.selectedTime,
      numberOfGuests: guestsNumber,
      occasion: occasion,
    });
    e.preventDefault();
    props.submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={resDate}
        onChange={(e) => {
          setResDate(e.target.value);
          props.updateTimes(e.target.value);
        }}
      />
      <label htmlFor="available-times">Available times</label>
      <select
        id="available-times"
        value={props.selectedTime}
        onChange={(e) => props.setSelectedTime(e.target.value)}
      >
        {props.availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guestsNumber}
        onChange={(e) => setGuestsNumber(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default ReservationForm;

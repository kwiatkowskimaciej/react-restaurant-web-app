import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  date: Yup.date().required('Required'),
  time: Yup.string().required('Required'),
  guests: Yup.number().required('Required'),
  occasion: Yup.string().optional(),
});

const ReservationForm = (props) => {
  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      guests: 1,
      occasion: '',
    },
    onSubmit: (values) => {
      props.submitForm(values);
    },
    validationSchema: validationSchema,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      aria-labelledby="reservation-form-heading"
    >
      <h2 id="reservation-form-heading">Make a Reservation</h2>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formik.values.date}
        onChange={(e) => {
          formik.handleChange(e);
          props.updateTimes(e.target.value);
        }}
        onBlur={formik.handleBlur}
        aria-describedby="date-error"
      />
      {formik.touched.date && formik.errors.date && (
        <div id="date-error">{formik.errors.date}</div>
      )}

      <label htmlFor="time">Available times</label>
      <select
        id="time"
        name="time"
        value={formik.values.time}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        aria-describedby="time-error"
      >
        {props.availableTimes?.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      {formik.touched.time && formik.errors.time && (
        <div id="time-error">{formik.errors.time}</div>
      )}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        placeholder="1"
        min="1"
        max="10"
        value={formik.values.guests}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        aria-describedby="guests-error"
      />
      {formik.touched.guests && formik.errors.guests && (
        <div id="guests-error">{formik.errors.guests}</div>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formik.values.occasion}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="">None</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
};

export default ReservationForm;

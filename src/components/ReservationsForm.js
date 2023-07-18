import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  date: Yup.date().required('Required'),
  time: Yup.string().required('Required'),
  guests: Yup.number()
    .max(10, 'Maximum number of guests is 10')
    .required('Required'),
  occasion: Yup.string().optional(),
  location: Yup.string().required('Required'),
  comments: Yup.string().max(
    250,
    'Maximum length of comment is 250 characters'
  ),
  name: Yup.string().max(100).required('Required'),
  lastName: Yup.string().max(100).required('Required'),
  email: Yup.string().email('Email is not valid').required('Required'),
  phoneNumber: Yup.string().optional(),
});

const ReservationForm = (props) => {
  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      guests: '',
      occasion: '',
      location: 'indoor',
      comments: '',
      name: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },
    onSubmit: (values) => {
      props.submitForm(values);
    },
    validationSchema: validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="reservation-details">
        <h3 className="form-section-title">Reservation details</h3>
        <div className="reservation-first-column">
          <div>
            <label htmlFor="date">Date*</label>
            <input
              className={
                formik.touched.date && formik.errors.date ? 'invalid' : 'valid'
              }
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
              <div id="date-error" className="error">
                {formik.errors.date}
              </div>
            )}
          </div>
          <div className="custom-select">
            <label htmlFor="time">Time*</label>
            <select
              className={
                formik.touched.time && formik.errors.time ? 'invalid' : 'valid'
              }
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
              <div id="time-error" className="error">
                {formik.errors.time}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="guests">Number of guests*</label>
            <input
              className={
                formik.touched.guests && formik.errors.guests
                  ? 'invalid'
                  : 'valid'
              }
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
              <div id="guests-error" className="error">
                {formik.errors.guests}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={formik.values.occasion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="none">None</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
        </div>
        <div className="reservation-second-column">
          <fieldset>
            <legend>Table location*</legend>
            <div className="radio">
              <input
                type="radio"
                id="indoor"
                name="location"
                value="indoor"
                checked={formik.values.location === 'indoor'}
                onChange={formik.handleChange}
              />
              <label htmlFor="indoor">Indoor</label>
            </div>
            <div className="radio">
              <input
                type="radio"
                id="outdoor"
                name="location"
                value="outdoor"
                checked={formik.values.location === 'outdoor'}
                onChange={formik.handleChange}
              />
              <label htmlFor="outdoor">Outdoor</label>
            </div>
            {formik.touched.location && formik.errors.location && (
              <div id="location-error" className="error">
                {formik.errors.location}
              </div>
            )}
          </fieldset>
          <div>
            <label htmlFor="comments">Comments</label>
            <textarea
              id="comments"
              name="comments"
              rows="5"
              cols="33"
              onChange={formik.handleChange}
            ></textarea>
            {formik.touched.comments && formik.errors.comments && (
              <div id="comments-error" className="error">
                {formik.errors.comments}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="contact-information">
        <h3 className="form-section-title">Contact information</h3>
        <div className='name'>
          <label htmlFor="name">Name*</label>
          <input
            className={
              formik.touched.name && formik.errors.name ? 'invalid' : 'valid'
            }
            type="text"
            id="name"
            name="name"
            min="1"
            max="10"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-describedby="name-error"
          />
          {formik.touched.name && formik.errors.name && (
            <div id="name-error" className="error">
              {formik.errors.name}
            </div>
          )}
        </div>
        <div className='last-name'>
          <label htmlFor="lastName">Last Name*</label>
          <input
            className={
              formik.touched.lastName && formik.errors.lastName
                ? 'invalid'
                : 'valid'
            }
            type="text"
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-describedby="lastName-error"
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div id="lastName-error" className="error">
              {formik.errors.lastName}
            </div>
          )}
        </div>
        <div className='email'>
          <label htmlFor="email">Email*</label>
          <input
            className={
              formik.touched.email && formik.errors.email ? 'invalid' : 'valid'
            }
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-describedby="email-error"
          />
          {formik.touched.email && formik.errors.email && (
            <div id="email-error" className="error">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className='phone-number'>
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            className={
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? 'invalid'
                : 'valid'
            }
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-describedby="name-error"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div id="phoneNumber-error" className="error">
              {formik.errors.phoneNumber}
            </div>
          )}
        </div>
      </div>
      <button type="submit">Make Your Reservation</button>
    </form>
  );
};

export default ReservationForm;

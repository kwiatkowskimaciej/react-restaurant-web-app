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
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        value={formik.values.date}
        onChange={(e) => {
          formik.handleChange(e);
          props.updateTimes(e.target.value);
        }}
        onBlur={formik.handleBlur}
      />
      {formik.touched.date && formik.errors.date && (
        <div>{formik.errors.date}</div>
      )}

      <label htmlFor="time">Available times</label>
      <select
        id="time"
        name="time"
        value={formik.values.time}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        {props.availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      {formik.touched.time && formik.errors.time && (
        <div>{formik.errors.time}</div>
      )}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        name="guests"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={formik.values.guests}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.guests && formik.errors.guests && (
        <div>{formik.errors.guests}</div>
      )}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formik.values.occasion}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default ReservationForm;

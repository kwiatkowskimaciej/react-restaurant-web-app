import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ConfirmedBooking = () => {
  const location = useLocation();
  const formData = location.state;

  return (
    <div className='wrapper'>
      <Header />
      <div className="container">
        <h1 className='confirmation-header'>Booking has been confirmed!</h1>
        <div className="confirmation-card">
          <h3 className='details'>Details of reservation</h3>
          <ul>
            <li>
              <strong>Time and date: </strong>
              {formData.date}
            </li>
            <li>
              <strong>Number of people: </strong>
              {formData.guests}
            </li>
            <li>
              <strong>Occasion: </strong>
              {formData.occasion}
            </li>
            <li>
              <strong>Table location: </strong>
              {formData.location}
            </li>
            <li>
              <strong>Comments: </strong>
              {formData.comments}
            </li>
          </ul>
        </div>
        <div className="confirmation-card">
          <h3 className='details'>Contact information</h3>
          <ul>
            <li>
              <strong>Name: </strong>
              {formData.name}
            </li>
            <li>
              <strong>Last name: </strong>
              {formData.lastName}
            </li>
            <li>
              <strong>Email: </strong>
              {formData.email}
            </li>
            {formData.phoneNumber ? (
            <li>
              <strong>Phone number: </strong>
              {formData.phoneNumber}
            </li>) : null}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConfirmedBooking;

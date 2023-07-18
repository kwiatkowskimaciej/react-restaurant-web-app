import { useLocation } from 'react-router-dom';
import Header from './Header';

const ConfirmedBooking = () => {
  const location = useLocation();
  const formData = location.state;

  return (
    <div>
      <Header />
      <h3>Booking has been confirmed!</h3>
      <p>{formData.phoneNumber}</p>
    </div>
  );
};

export default ConfirmedBooking;

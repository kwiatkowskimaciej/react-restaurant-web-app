import { useNavigate } from 'react-router-dom';

const LandingSection = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = 'reservations';
    navigate(path);
  };

  return (
    <section className="landing-section">
      <div className="container">
        <div className="hero">
          <div className="hero-title">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <div className="hero-lead">
            <p>
              We are family owned Mediterranean restaurant, focused on
              traditional recipies served with a modern twist.
            </p>
            <button onClick={routeChange}>Reserve a table</button>
          </div>
          <div className="hero-image">
            <img
              src={require('../images/restauranfood.jpg')}
              alt="Four bruschettas on a black wooden board"
              width={'420px'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;

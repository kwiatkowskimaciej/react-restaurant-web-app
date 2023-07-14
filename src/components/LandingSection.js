const LandingSection = () => {
  return (
    <section className="landing-section">
      <div className="container">
        <div className="hero">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are family owned Mediterranean restaurant, focused on
              traditional recipies served with a modern twist.
            </p>
            <button>Reserve a table</button>
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

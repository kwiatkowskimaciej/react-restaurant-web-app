const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about">
          <div className="about-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
              metus tincidunt, consequat quam non, mollis eros. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Morbi a metus
              tincidunt, consequat quam non, mollis eros. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. <br />
              <br />
              Morbi a metus tincidunt, consequat quam non, mollis eros. Proin
              hendrerit neque sit amet neque volutpat, nec vulputate est
              lobortis.
            </p>
          </div>
          <div className="about-image">
            <img
              src={require('../images/restaurant.jpg')}
              alt="Four bruschettas on a black wooden board"
              width={'420px'}
            />
            <img
              src={require('../images/mario_and_adrian.jpg')}
              alt="Four bruschettas on a black wooden board"
              width={'420px'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

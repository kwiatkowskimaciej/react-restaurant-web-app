const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials">
          <h1>Testimonials</h1>
          <div className="testimonials-deck">
            <div className="testimonial-card">
              <div className="rating">★★★★★</div>
              <div className="profile">
                <div className="avatar">
                  <img
                    src={require('../images/avatar.png')}
                    alt="Avatar"
                    width={'48px'}
                  />
                </div>
                <p>Bob</p>
              </div>
              <div className="comment">
                <p>Amazing food!</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="rating">★★★★★</div>
              <div className="profile">
                <div className="avatar">
                  <img
                    src={require('../images/avatar.png')}
                    alt="Avatar"
                    width={'48px'}
                  />
                </div>
                <p>Bob</p>
              </div>
              <div className="comment">
                <p>Amazing food!</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="rating">★★★★★</div>
              <div className="profile">
                <div className="avatar">
                  <img
                    src={require('../images/avatar.png')}
                    alt="Avatar"
                    width={'48px'}
                  />
                </div>
                <p>Bob</p>
              </div>
              <div className="comment">
                <p>Amazing food!</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="rating">★★★★★</div>
              <div className="profile">
                <div className="avatar">
                  <img
                    src={require('../images/avatar.png')}
                    alt="Avatar"
                    width={'48px'}
                  />
                </div>
                <p>Bob</p>
              </div>
              <div className="comment">
                <p>Amazing food!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

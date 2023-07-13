const SpecialsSection = () => {
  return (
    <section>
      <div className="container">
        <div className="specials-section">
          <div className="specials-section-header">
            <h1>This weeks specials!</h1>
            <button>Online Menu</button>
          </div>
          <div className="deck">
            <div className="card">
              <div className="card-image">
                <img
                  src={require('../images/greek_salad.jpg')}
                  alt="Greek salad"
                  width={'300px'}
                />
              </div>
              <div className="card-header">
                <h3>Greek Salad</h3>
                <p>$ 12.99</p>
              </div>
              <div className="card-body">
                <p>
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
              </div>
              <div className="card-footer">
                <p>Order to delivery</p>
                <span className="material-icons">delivery_dining</span>
              </div>
            </div>
            <div className="card">
              <img
                src={require('../images/greek_salad.jpg')}
                alt="Greek salad"
                width={'300px'}
              />
              <div className="card-header">
                <h3>Greek Salad</h3>
                <p>$ 12.99</p>
              </div>
              <div className="card-body">
                <p>
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
              </div>
              <div className="card-footer">
                <p>Order to delivery</p>
                <span className="material-icons">delivery_dining</span>
              </div>
            </div>
            <div className="card">
              <img
                src={require('../images/greek_salad.jpg')}
                alt="Greek salad"
                width={'300px'}
              />
              <div className="card-header">
                <h3>Greek Salad</h3>
                <p>$ 12.99</p>
              </div>
              <div className="card-body">
                <p>
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
              </div>
              <div className="card-footer">
                <p>Order to delivery</p>
                <span className="material-icons">delivery_dining</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;

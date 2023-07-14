import Card from './Card';

const specials = [
  {
    title: 'Greek Salad',
    price: 12.99,
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    getImageSrc: () => require('../images/greek_salad.jpg'),
  },
  {
    title: 'Bruschetta',
    price: 12.99,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    getImageSrc: () => require('../images/bruchetta.png'),
  },
  {
    title: 'Lemon Dessert',
    price: 12.99,
    description:
      'This comes straight from grandma’s recipie book, every last ingredient has been sourced and is as authentic as can be imagined.',
    getImageSrc: () => require('../images/lemon dessert.jpg'),
  },
];

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
            {specials.map((special) => (
              <Card
                key={special.title}
                title={special.title}
                price={special.price}
                description={special.description}
                imgSrc={special.getImageSrc()}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;

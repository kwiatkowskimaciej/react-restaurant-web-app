import Testimonial from './Testimonial';

const testimonials = [
  {
    userId: 1,
    rating: "★★★★★",
    name: 'Bob',
    comment: 'Amazing food!',
    getAvatarSrc: () => require('../images/avatar_bob.png'),
  },
  {
    userId: 2,
    rating: "★★★★★",
    name: 'Katy',
    comment: 'Very tasty, nice place.',
    getAvatarSrc: () => require('../images/avatar_katy.png'),
  },
  {
    userId: 3,
    rating: "★★★★★",
    name: 'Emily',
    comment: 'Delicious food!!!',
    getAvatarSrc: () => require('../images/avatar_emily.png'),
  },
  {
    userId: 4,
    rating: "★★★★★",
    name: 'Robert',
    comment: 'Delicious food, highly recommended.',
    getAvatarSrc: () => require('../images/avatar_robert.png'),
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials">
          <div className="testimonials-header">
            <h1>Testimonials</h1>
          </div>
          <div className="deck">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.userId}
                rating={testimonial.rating}
                name={testimonial.name}
                comment={testimonial.comment}
                avatarSrc={testimonial.getAvatarSrc()}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

const Testimonial = ({ rating, name, comment, avatarSrc }) => {
    return (
    <div className="testimonial-card">
      <div className="rating">{rating}</div>
      <div className="profile">
        <div className="avatar">
          <img
            src={avatarSrc}
            alt="Avatar"
            width={'48px'}
          />
        </div>
        <p>{name}</p>
      </div>
      <div className="comment">
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Testimonial;

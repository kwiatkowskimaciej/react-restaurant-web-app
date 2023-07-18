import React from 'react';

const Testimonial = ({ rating, name, comment, avatarSrc }) => {
  return (
    <div className="testimonial-card">
      <div className="rating" role="img" aria-label={`Rating: ${rating}`}>
        {rating}
      </div>
      <div className="profile">
        <div className="avatar">
          <img src={avatarSrc} alt="Avatar" width={48} height={48} />
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

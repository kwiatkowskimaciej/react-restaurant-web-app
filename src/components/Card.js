import React from 'react';

const Card = ({ title, price, description, imgSrc }) => {
  return (
    <div className="card" role="region" aria-label={title}>
      <div className="card-image">
        <img src={imgSrc} alt={title} width={'100%'} />
      </div>
      <div className="card-body">
        <div className="card-header">
          <h3>{title}</h3>
          <p>$ {price}</p>
        </div>
        <div className="card-description">
          <p>{description}</p>
        </div>
        <div className="card-footer" role="contentinfo">
          <p>Order to delivery</p>
          <span className="material-icons">delivery_dining</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

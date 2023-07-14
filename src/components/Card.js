const Card = ({ title, price, description, imgSrc }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imgSrc} alt={title} width={'300px'} />
      </div>
      <div className="card-header">
        <h3>{title}</h3>
        <p>$ {price}</p>
      </div>
      <div className="card-body">
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <p>Order to delivery</p>
        <span className="material-icons">delivery_dining</span>
      </div>
    </div>
  );
};

export default Card;

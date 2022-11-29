const Card = ({ card }) => {
  return (
    <div className="user-card">
      <img src={card.profilePic} alt={card.firstName + card.lastName} width="500px" height='300px' />
      <div className="user-card-body-container">
        <div className="user-card-body">
          <h4>
            <b>{card.firstName} {card.lastName}</b>
          </h4>
          <p>{card.interests}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

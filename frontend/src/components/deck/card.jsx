const Card = ({ card }) => {
  return (
    // <div className='user-card'>
    //   <h1>{card.name}</h1>
    //   <h2>{card.email}</h2>
    // </div>

    <div className="user-card">
      <img src={card.profilePic} alt="Bby yoda" width="500px" height='300px' />
      <div className="user-card-body-container">
        <div className="user-card-body">
          <h4>
            <b>{card.firstName}</b>
          </h4>
          <p>{card.interests}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

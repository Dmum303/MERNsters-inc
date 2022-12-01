import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
  const [{ x }, api] = useSpring(() => ({ x: 0, y: 0 }));
  const [isVisible, setIsVisible] = useState(true);
  const visible = isVisible ? "" : " invisible";
  const navigate = useNavigate()

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });



    const swipeOffDistance = 300;
    if (mx > swipeOffDistance && !down) {
      console.log('swiped right')
      fetch('/api/chats/createchat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId1: window.localStorage.getItem('userId'),
          firstName1: window.localStorage.getItem('firstName'),
          lastName1: window.localStorage.getItem('lastName'),
          userId2: card._id,
          firstName2: card.firstName,
          lastName2: card.lastName,
          senderId: window.localStorage.getItem('userId'),
          senderName: `${window.localStorage.getItem('firstName')} ${window.localStorage.getItem('lastName')}`,
          recipientId: card._id,
          recipientName: `${card.firstName} ${card.lastName}`,
          text: 'Hi, I swiped right on you!'
        }),
      })
      navigate('/chat');
    }

    if (mx < -swipeOffDistance && !down) {
      console.log("left");
      setIsVisible(false);
    }
  });

  return (
    <animated.div {...bind()} className={"user-card" + visible} style={{ x }}>
      <img
        src={card.profilePic}
        alt={card.firstName + card.lastName}
        draggable="false"
        className="card-img"
      />
      <div className="user-card-body-container">
        <div className="user-card-body">
          <h4>
            <b>
              {card.firstName} {card.lastName}
            </b>
          </h4>
          <p>{card.interests}</p>
        </div>
      </div>
    </animated.div>
  );
};

export default Card;

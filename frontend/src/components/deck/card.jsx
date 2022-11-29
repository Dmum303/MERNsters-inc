import { useSpring, animated } from 'react-spring'
import { useDrag } from '@use-gesture/react'
import  { useState }  from 'react';

const Card = ({ card }) => {
  const [{ x }, api] = useSpring(() => ({ x: 0, y: 0 }))
  const [isVisible, setIsVisible] = useState(true)
  const visible = isVisible ? '' : ' invisible';

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })

    const swipeOffDistance = 300;
    if (mx > swipeOffDistance && !down) {
      console.log('right')
      // sends post request
    }

    if (mx < -swipeOffDistance && !down) {
      console.log('left')
      setIsVisible(false);

    }
  })

  
  return (
    <animated.div {...bind()} className={'user-card' + visible} style={{ x }} >
      <img src={card.profilePic} alt={card.firstName + card.lastName} draggable='false' className='card-img' />
      <div className="user-card-body-container">
        <div className="user-card-body">
          <h4>
            <b>{card.firstName} {card.lastName}</b>
          </h4>
          <p>{card.interests}</p>
        </div>
      </div>
    </animated.div>
  );
};

export default Card;

import Deck from "../deck/deck";
import './swipe.css';

export default function Swipe() {
  return (
    <div className="swipe-container">
      <img className="swipe-right" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png"}></img>
      <img className="swipe-left" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png"}></img>
      <Deck />
    </div>
  );
}

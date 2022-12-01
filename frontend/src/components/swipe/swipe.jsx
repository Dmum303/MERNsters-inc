import Deck from "../deck/deck";
import './swipe.css';

export default function Swipe() {
  return (
    <div className="swipe-container">
      <img className="swipe-right" src={"https://cdn-icons-png.flaticon.com/512/4603/4603556.png"}></img>
      <img className="swipe-left" src={"https://cdn-icons-png.flaticon.com/512/4603/4603440.png"}></img>
      <Deck />
    </div>
  );
}

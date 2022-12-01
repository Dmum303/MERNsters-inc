import Deck from "../deck/deck";
import './swipe.css';
import NavBar from '../lib/navbar';


export default function Swipe() {
  return (
    <>
    <NavBar linkTo="Logout" />
    <div className="swipe-container">
      <Deck />
    </div>
    </>
  );
}

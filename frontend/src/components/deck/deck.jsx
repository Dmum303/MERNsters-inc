import { useState, useEffect } from "react";
import Card from "./card";
import './deck.css';

const Deck = () => {
  const [deck, setDeck] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getDeck = async () => {
      try {
        // const { data } = await axios.get("/api/users/getAllUsers");
        fetch("/api/users/getAllUsers")
        
        .then(response => response.json())
        .then(data => {setDeck(data);
          setLoading(false)
        }
        )
      } catch (err) {
        setError(true);
      }
    };
    getDeck();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div>
      <h1>Deck</h1>
      {deck.map((card) => (
        <Card key={card._id} card={card} />
      ))}
    </div>
  );
}

export default Deck;
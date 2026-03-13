import { Link } from "react-router-dom";
import { playClickSound } from "../../audio/click";

import Plus from "../../icons/Plus";

function CollectionList({ cards, fetchCardById, showClickedCard }) {
  return (
    <div className="cards-grid-container">
      {cards?.map((card, index) => (
        <div
          className="card-wrapper"
          key={index}
          onClick={() => {
            playClickSound();
            // get id for detailed card data
            fetchCardById(card.id);
            // open the modal when the card is clicked
            showClickedCard(card);
          }}
        >
          <img className="card" src={card.image} alt={card.name} />
        </div>
      ))}
      <Link to="/cards">
        <button className="add-card-wrapper card" onClick={playClickSound}>
          <p className="title">Add Card</p>
          <Plus className="plus" />
        </button>
      </Link>
    </div>
  );
}

export default CollectionList;

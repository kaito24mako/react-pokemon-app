import { Link } from "react-router-dom";

import Plus from "../../icons/Plus";

function CollectionList({ cards, fetchCardById, showClickedCard }) {
  return (
    <div className="cards-grid-container">
      {cards?.map((card, index) => (
        <div
          className="card-wrapper"
          key={index}
          onClick={() => {
            fetchCardById(card.id);
            showClickedCard(card);
          }}
        >
          <img className="card" src={card.image} alt={card.name} />
        </div>
      ))}
      <Link to="/cards">
        <button className="add-card-wrapper card">
          <p className="title">Add Card</p>
          <Plus className="plus" />
        </button>
      </Link>
    </div>
  );
}

export default CollectionList;

import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";

import Plus from "../../icons/Plus";

function CollectionList({
  cards,
  fetchingCards,
  fetchCardById,
  handleClickedCard,
}) {
  return (
    <div className="cards-grid-container">
      {/* if loading... render spinner, or else render cards */}
      {fetchingCards ? (
        <SyncLoader color="#1B1B1B" margin={3} size={9} />
      ) : (
        cards?.map((card, index) => (
          <div
            className="card-wrapper"
            key={index}
            onClick={() => {
              // get id for detailed card data
              fetchCardById(card.id);
              // tells CardsPage which card was clicked to open modal
              handleClickedCard(card);
            }}
          >
            <img className="card" src={card.image} alt={card.name} />
          </div>
        ))
      )}
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

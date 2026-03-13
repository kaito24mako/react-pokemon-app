import { playClickSound } from "../../audio/click.js";

import Spinner from "../loader/Spinner.jsx";

function CardList({ cards, fetchingCards, fetchCardById, showClickedCard }) {
  return (
    <div className="cards-grid-container">
      {/* if loading... render spinner, or else render cards */}
      {fetchingCards ? (
        <Spinner />
      ) : (
        cards?.map((card, index) => (
          <div
            className="card-wrapper"
            key={index}
            onClick={() => {
              playClickSound();
              // get id for detailed card data
              fetchCardById(card.id);
              // if a card was clicked, open the modal
              showClickedCard(card);
            }}
          >
            <img className="card" src={card.image} alt={card.name} />
          </div>
        ))
      )}
    </div>
  );
}

export default CardList;

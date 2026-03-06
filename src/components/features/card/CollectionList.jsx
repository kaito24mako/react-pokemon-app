import { SyncLoader } from "react-spinners";

import "./CollectionList.css";

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
    </div>
  );
}

export default CollectionList;

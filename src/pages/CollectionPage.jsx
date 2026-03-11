import { useState } from "react";

import CollectionList from "../components/features/card/CollectionList";
import CardItem from "../components/features/card/CardItem";
import ToggleCardBackground from "../components/features/button/ToggleCardBackground";

function CollectionPage({
  cardItem,
  setCardItem,
  fetchingCards,
  fetchCardById,
  favourites,
  toggleFavourite,
}) {
  // to track if a card was clicked to open modal
  // easier to track than cardItem since cardItem is an array of objects
  const [clickedCard, setClickedCard] = useState(null);

  const [colouredBackground, setColouredBackground] = useState(true);

  // open modal when a card is clicked
  function handleClickedCard(card) {
    setClickedCard(card);
  }

  // close modal
  function handleCloseModal() {
    setClickedCard(null);
  }

  // for toggling between coloured and non-coloured card backgrounds
  function handleColouredBackground() {
    setColouredBackground((prev) => !prev);
  }

  return (
    <div className="collectionPage-container">
      <div className="cards-container">
        <div className="cards-title-container">
          <h1>My Party</h1>
          <span className="counter">{favourites.length} cards</span>
        </div>

        <div className="coloured-cards-button">
          <ToggleCardBackground
            handleColouredBackground={handleColouredBackground}
            colouredBackground={colouredBackground}
          />
        </div>

        <CollectionList
          // render the favourites array
          // use the same prop name as in CardsPage since both pages require the same functionalities (e.g., fetchCardById, opening modal)
          // props never conflict since they are scoped to each component instance - CollectionPage renders a CardList instance with its props, not with CardPages' props
          cards={favourites}
          fetchingCards={fetchingCards}
          fetchCardById={fetchCardById}
          handleClickedCard={handleClickedCard}
        />

        <p className={`quote ${!favourites.length > 0 ? "" : "fade-out"}`}>
          Go add your favourite cards! ❤️
        </p>
      </div>

      {/* MODAL - CARD ITEM */}
      {/* only render modal when a card is clicked */}
      {clickedCard && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <CardItem
            cardItem={cardItem}
            setCardItem={setCardItem}
            handleCloseModal={handleCloseModal}
            favourites={favourites}
            toggleFavourite={toggleFavourite}
            colouredBackground={colouredBackground}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default CollectionPage;

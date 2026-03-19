import { useState } from "react";

import CollectionList from "../components/features/card/CollectionList";
import CardItem from "../components/features/card/CardItem";
import ToggleCardBackground from "../components/features/button/ToggleCardBackground";
import TextFileBtn from "../components/features/button/TextFileBtn";

function CollectionPage({
  detailedCard,
  setDetailedCard,
  fetchingCards,
  fetchCardById,
  favourites,
  toggleFavourite,
}) {
  // to track if a card was clicked to open the card item modal
  const [clickedCard, setClickedCard] = useState(null);

  const [colouredBackground, setColouredBackground] = useState(true);

  // open modal when a card is clicked
  function showClickedCard(card) {
    setClickedCard(card);
  }

  function closeModal() {
    setClickedCard(null);
  }

  // for toggling between coloured and non-coloured card backgrounds
  function toggleColouredCardBg() {
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
            toggleColouredCardBg={toggleColouredCardBg}
            colouredBackground={colouredBackground}
          />
          <TextFileBtn favourites={favourites} />
        </div>

        <CollectionList
          // props never conflict with CardsPage since they are scoped to each component instance - CollectionPage renders a CardList instance with its props, not with CardPages' props
          cards={favourites}
          fetchingCards={fetchingCards}
          fetchCardById={fetchCardById}
          showClickedCard={showClickedCard}
        />

        <p className={`quote ${!favourites.length > 0 ? "" : "fade-out"}`}>
          Go add your favourite cards! ❤️
        </p>
      </div>

      {/* modal (card item) */}
      {clickedCard && (
        <div className="modal-backdrop" onClick={closeModal}>
          <CardItem
            detailedCard={detailedCard}
            setDetailedCard={setDetailedCard}
            closeModal={closeModal}
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

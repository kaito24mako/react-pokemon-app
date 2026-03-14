import { useState } from "react";

import SearchForm from "../components/features/search/SearchForm";
import ToggleCardBackground from "../components/features/button/ToggleCardBackground";
import CardList from "../components/features/card/CardList";
import CardItem from "../components/features/card/CardItem";

import pokeball from "../assets/icons/logo/pokeball.png";

function CardsPage({
  cards,
  search,
  detailedCard,
  setDetailedCard,
  handleSearch,
  handleSubmitSearch,
  fetchingCards,
  fetchCardById,
  favourites,
  toggleFavourite,
  clickedCard,
  setClickedCard,
  showClickedCard,
}) {
  const [colouredBackground, setColouredBackground] = useState(true);

  function closeModal() {
    setClickedCard(null);
  }

  function toggleColouredCardBg() {
    setColouredBackground((prev) => !prev);
  }

  return (
    <div className="cardsPage-container">
      <div className="cards-container">
        <div className="cards-title-container">
          <h1>Cards</h1>
          <span className="counter">{cards.length} cards</span>
        </div>

        <div className="search-container">
          <SearchForm
            search={search}
            handleSearch={handleSearch}
            handleSubmitSearch={handleSubmitSearch}
          />
          <ToggleCardBackground
            toggleColouredCardBg={toggleColouredCardBg}
            colouredBackground={colouredBackground}
          />
        </div>

        <CardList
          cards={cards}
          fetchingCards={fetchingCards}
          fetchCardById={fetchCardById}
          showClickedCard={showClickedCard}
        />

        <p className={`quote ${!cards.length > 0 ? "" : "fade-out"}`}>
          Let's start searching! <img src={pokeball} />
        </p>
      </div>

      {/* MODAL - CARD ITEM */}
      {/* asked Cursor for some help! */}
      {clickedCard && (
        <div className="modal-backdrop" onClick={closeModal}>
          <CardItem
            detailedCard={detailedCard}
            setDetailedCard={setDetailedCard}
            closeModal={closeModal}
            favourites={favourites}
            toggleFavourite={toggleFavourite}
            colouredBackground={colouredBackground}
          />
        </div>
      )}
    </div>
  );
}

export default CardsPage;

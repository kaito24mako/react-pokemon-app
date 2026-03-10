import { useState } from "react";

import SearchForm from "../components/features/search/SearchForm";
import ToggleCardBackground from "../components/features/button/ToggleCardBackground";
import Filterbar from "../components/features/filter/Filterbar";
import CardList from "../components/features/card/CardList";
import CardItem from "../components/features/card/CardItem";

import pokeball from "../assets/icons/logo/pokeball.png";

function CardsPage({
  cards,
  search,
  cardItem,
  setCardItem,
  handleSearch,
  handleSubmitSearch,
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
    <div className="cardsPage-container">
      <Filterbar />

      <div className="cards-container">
        <div className="cards-title-container">
          <p>Cards List</p>
          <span className="counter">{cards.length} cards</span>
        </div>

        <div className="search-container">
          <SearchForm
            search={search}
            handleSearch={handleSearch}
            handleSubmitSearch={handleSubmitSearch}
          />
          <button className="dropdown-button">Sort by number ⤵︎</button>
          <button className="order-button">⇡ Ascending Order</button>
          <ToggleCardBackground
            handleColouredBackground={handleColouredBackground}
            colouredBackground={colouredBackground}
          />
        </div>

        <CardList
          // render the cards array
          cards={cards}
          fetchingCards={fetchingCards}
          fetchCardById={fetchCardById}
          handleClickedCard={handleClickedCard}
        />

        <p className={`quote ${!cards.length > 0 ? "" : "fade-out"}`}>
          Let's start searching! <img src={pokeball} />
        </p>
      </div>

      {/* MODAL - CARD ITEM */}
      {/* only render modal when a card is clicked */}
      {/* asked Cursor for some help! */}
      {clickedCard && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          {/* prevent closing when clicked inside modal */}
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

export default CardsPage;

import { useState } from "react";

import SearchForm from "../components/features/search/SearchForm";
import Filterbar from "../components/features/filter/Filterbar";
import CardList from "../components/features/card/CardList";
import CardItem from "../components/features/card/CardItem";

import "./CardsPage.css";

function CardsPage({
  cards,
  search,
  cardItem,
  setCardItem,
  handleSearch,
  handleSubmit,
  fetchingCards,
  fetchCardById,
}) {
  // to track if a card was clicked to open modal
  // easier to track than cardItem since cardItem is an array of objects
  const [clickedCard, setClickedCard] = useState(null);

  // open modal when a card is clicked
  function handleClickedCard(card) {
    setClickedCard(card);
  }

  // close modal
  function handleCloseModal() {
    setClickedCard(null);
  }

  return (
    <div className="cardsPage-container">
      <Filterbar />

      <div className="cards-container">
        <div className="title-container-two">
          <p>Cards List</p>
          <span className="counter">{cards.length} cards</span>
        </div>

        <div className="search-container">
          <SearchForm
            search={search}
            handleSearch={handleSearch}
            handleSubmit={handleSubmit}
          />
          <button className="dropdown-button">Sort by number ⤵︎</button>
          <button className="order-button">⇡ Ascending Order</button>
        </div>

        <CardList
          cards={cards}
          fetchingCards={fetchingCards}
          fetchCardById={fetchCardById}
          handleClickedCard={handleClickedCard}
        />

        <p className={`quote ${!cards.length > 0 ? "" : "fade-out"}`}>
          Let's start searching! 😆
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
            // onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default CardsPage;

import { useState } from "react";

import CardList from "../components/features/card/CardList";
import CardItem from "../components/features/card/CardItem";

import "./CollectionPage.css";

function CollectionPage({ cards, cardItem, fetchingCards, fetchCardById }) {
  // function clickedcard
  // function closemodal

  return (
    <div className="collectionPage-container">
      <div className="cards-container">
        <div className="title-container-two">
          <p>My Collection</p>
          <span className="counter">{cards.length} cards</span>
        </div>

        <CardList
          cards={cards}
          fetchingCards={fetchingCards}
          fetchCardById={fetchCardById}
          // handleClickedCard={handleClickedCard}
        />

        <p className={`quote ${!cards.length > 0 ? "" : "fade-out"}`}>
          Go add your favourite cards! ❤️
        </p>
      </div>

      {/* {clickedCard && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <CardItem
            cardItem={cardItem}
            handleCloseModal={handleCloseModal}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )} */}
    </div>
  );
}

export default CollectionPage;

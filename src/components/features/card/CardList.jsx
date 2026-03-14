import Spinner from "../loader/Spinner.jsx";

function CardList({ cards, fetchingCards, fetchCardById, showClickedCard }) {
  return (
    <div className="cards-grid-container">
      {fetchingCards ? (
        <Spinner />
      ) : (
        cards?.map((card, index) => (
          <div
            className="card-wrapper"
            key={index}
            onClick={() => {
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

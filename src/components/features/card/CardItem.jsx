import CloseBtn from "../button/CloseBtn";

function CardItem({
  cardItem,
  setCardItem,
  handleCloseModal,
  favourites,
  toggleFavourite,
}) {
  return (
    <>
      {cardItem &&
        cardItem.map((card, index) => (
          // mapping types as a class for different background colours per card type
          <div
            className={`card-item-container ${card.types?.[0].toLowerCase()}`}
            key={index}
          >
            <CloseBtn handleCloseModal={handleCloseModal} />

            <div className="left-container">
              <img src={card.image} className="item-image" />

              <div className="image-details-wrapper">
                <button
                  className="favourite-button"
                  onClick={(e) => {
                    // stop modal from closing
                    e.stopPropagation();
                    // injects the favourited card to see whether it should be added or removed in the favourites array
                    toggleFavourite(card);
                  }}
                >
                  ♥️
                </button>
                <ul className="details-wrapper">
                  <li>{card.id}</li>
                  <li>{card.rarity}</li>
                  <li>{card.stage}</li>
                </ul>
              </div>
            </div>

            <div className="right-container">
              <h2 className="item-title">{card.name}</h2>

              {/* REMOVE? */}
              {/* <p className="item-description">{card.description}</p> */}

              <div className="stats-container">
                <div className="health-wrapper stat">
                  <p className="stat-title">Health</p>
                  <p className="health-stat">❤️ {card.hp}</p>
                </div>

                {/* REMOVE? */}
                <div className="type-wrapper stat">
                  <p className="stat-title">Type</p>
                  {card.types?.map((type, index) => (
                    <p key={index}>{type}</p>
                  ))}
                </div>

                {/* REMOVE? */}
                <div className="weakness-wrapper stat">
                  <p className="stat-title">Weaknesses</p>
                  {card.weaknesses?.map((weakness, index) => (
                    <p key={index}>
                      {weakness.type}
                      {weakness.value}
                    </p>
                  ))}
                </div>

                <div className="retreat-wrapper stat">
                  <p className="stat-title">Retreat Cost</p>
                  <p>{card.retreat}</p>
                </div>
              </div>

              <div className="ability-container">
                <div className="icon-title-wrapper">
                  <p className="ability-title">Ability</p>
                  {card.abilities?.map((ability, index) => (
                    <p className="ability-name" key={index}>
                      {ability.name}
                    </p>
                  ))}
                </div>
                {card.abilities?.map((ability, index) => (
                  <p className="ability-effect" key={index}>
                    {ability.effect}
                  </p>
                ))}
              </div>

              {card.attacks?.map((attack, index) => (
                <div className="attack-container" key={index}>
                  <div className="cost-name-wrapper">
                    {attack.cost?.map((energy, i) => (
                      <p className="attack-cost" key={i}>
                        {energy}
                      </p>
                    ))}
                    <p className="attack-name">{attack.name}</p>
                    <p className="attack-damage">{attack.damage}</p>
                  </div>
                  <div className="effect-damage-wrapper">
                    <p>{attack.effect}</p>
                  </div>
                </div>
              ))}

              {/* <div className="rule-container">
            <div className="rule-title-wrapper">
              <p>Card Rule</p>
              <p>{card.rule}</p>
            </div>
            <p>{card.ruleDescription}</p>
          </div> */}
            </div>
          </div>
        ))}
    </>
  );
}

export default CardItem;

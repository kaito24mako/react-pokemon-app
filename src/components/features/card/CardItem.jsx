import { ToastContainer, toast } from "react-toastify";

import CloseBtn from "../button/CloseBtn";

import colorless from "../../../assets/types/colorless.png";
import darkness from "../../../assets/types/dark.png";
import dragon from "../../../assets/types/dragon.png";
import fairy from "../../../assets/types/fairy.png";
import fighting from "../../../assets/types/fighting.png";
import fire from "../../../assets/types/fire.png";
import grass from "../../../assets/types/grass.png";
import lightning from "../../../assets/types/lightning.png";
import psychic from "../../../assets/types/psychic.png";
import steel from "../../../assets/types/steel.png";
import water from "../../../assets/types/water.png";

function CardItem({
  cardItem,
  setCardItem,
  handleCloseModal,
  favourites,
  toggleFavourite,
  colouredBackground,
}) {
  const typeIcons = {
    colorless,
    darkness,
    dragon,
    fairy,
    fighting,
    fire,
    grass,
    lightning,
    psychic,
    steel,
    water,
  };

  function notifyFavourited() {
    toast("Added to your collection!");
  }

  return (
    <>
      {cardItem &&
        cardItem.map((card, index) => (
          // if user has set the cards to have a coloured background, then map the card types as a class to have different background colours per type
          <div
            className={`card-item-container ${colouredBackground ? card.types?.[0].toLowerCase() : ""}`}
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
                    notifyFavourited();
                  }}
                >
                  <p>⭐</p>
                  <p>Add to collection</p>
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

                <div className="type-wrapper stat">
                  <p className="stat-title">Type</p>
                  {card.types?.map((type, index) => (
                    <img
                      className="type-icon"
                      key={index}
                      src={typeIcons[type.toLowerCase()]}
                    />
                  ))}
                </div>

                <div className="weakness-wrapper stat">
                  <p className="stat-title">Weaknesses</p>
                  {card.weaknesses?.map((weakness, index) => (
                    // when mapping, there must only be one parent element
                    <div className="icon-value-wrapper">
                      <img
                        className="type-icon"
                        key={index}
                        src={typeIcons[weakness.type.toLowerCase()]}
                      />
                      <p>{weakness.value}</p>
                    </div>
                  ))}
                </div>

                <div className="retreat-wrapper stat">
                  <p className="stat-title">Retreat Cost</p>
                  {/* card.retreat = '1', '2', etc., so how to make it the colorless icon? */}
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
                  <div className="cost-name-damage-wrapper">
                    <div className="cost-name-wrapper">
                      <div className="cost-wrapper">
                        {attack.cost?.map((energy, i) => (
                          <img
                            className="attack-cost type-icon"
                            key={i}
                            src={typeIcons[energy.toLowerCase()]}
                          />
                        ))}
                      </div>

                      <p className="attack-name">{attack.name}</p>
                    </div>

                    <p className="attack-damage">{attack.damage}</p>
                  </div>

                  <div className="attack-effect-wrapper">
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
      <ToastContainer />
    </>
  );
}

export default CardItem;

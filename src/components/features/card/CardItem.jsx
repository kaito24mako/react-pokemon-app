import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { playAddSound } from "../../audio/add";
import { playRemoveSound } from "../../audio/remove";
import { playShineSound } from "../../audio/shine";

import CloseBtn from "../button/CloseBtn";

import colorless from "../../../assets/icons/type/colorless.png";
import darkness from "../../../assets/icons/type/dark.png";
import dragon from "../../../assets/icons/type/dragon.png";
import fairy from "../../../assets/icons/type/fairy.png";
import fighting from "../../../assets/icons/type/fighting.png";
import fire from "../../../assets/icons/type/fire.png";
import grass from "../../../assets/icons/type/grass.png";
import lightning from "../../../assets/icons/type/lightning.png";
import psychic from "../../../assets/icons/type/psychic.png";
import steel from "../../../assets/icons/type/steel.png";
import water from "../../../assets/icons/type/water.png";
import pokeball from "../../../assets/icons/logo/pokeball.png";

function CardItem({
  detailedCard,
  setDetailedCard,
  closeModal,
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

  const [shiningCard, setShiningCard] = useState(false);

  // useState only stores the state locally for one mount/render!
  // so useState won't work when switching between the cards and collection page
  // instead, use array.some() method

  function handleFavouriteClick(e, card) {
    e.stopPropagation();

    // injects the favourited card to see whether it should be added or removed in the favourites array
    toggleFavourite(card);

    const inCollection = favourites.some((c) => c.id === card.id);

    if (inCollection) {
      playRemoveSound();
      toast(`${card.name} removed from your party`, {
        closeOnClick: true,
        pauseOnHover: false,
      });
    } else {
      playAddSound();
      toast(`${card.name} added to your party!`, {
        closeOnClick: true,
        pauseOnHover: false,
      });
    }
  }

  return (
    <>
      {detailedCard &&
        detailedCard.map((card, index) => (
          <div
            className={`card-item-container ${colouredBackground ? card.types?.[0].toLowerCase() : ""}`}
            key={index}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseBtn closeModal={closeModal} />

            <div className="left-container">
              <div
                className={`card-wrapper ${shiningCard ? "shining-card" : ""}`}
              >
                <img
                  src={card.image}
                  className="card-image"
                  onClick={() => {
                    playShineSound();
                    setShiningCard(false);
                    // to allow for the animation to play on every click
                    setTimeout(() => setShiningCard(true), 10);
                  }}
                  alt={card.name}
                />
              </div>

              <div className="image-details-wrapper">
                <button
                  className="favourite-button"
                  onClick={(e) => {
                    handleFavouriteClick(e, card);
                  }}
                >
                  <img src={pokeball} />
                  <p>
                    {favourites.some((c) => c.id === card.id)
                      ? "Remove from party"
                      : "Add to party"}
                  </p>
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

              <div className="stats-container">
                <h3>General</h3>
                <div className="stats-wrapper">
                  <div className="stat">
                    <p className="stat-title">Health</p>
                    {card.hp ? (
                      <p className="health-stat">♥️ {card.hp} HP</p>
                    ) : (
                      <p>?</p>
                    )}
                  </div>

                  <div className="stat">
                    <p className="stat-title type">Type</p>
                    {card.types ? (
                      card.types.map((type, index) => (
                        <img
                          className="type-icon"
                          key={index}
                          src={typeIcons[type.toLowerCase()]}
                        />
                      ))
                    ) : (
                      <p>?</p>
                    )}
                  </div>

                  <div className="stat">
                    <p className="stat-title">Weaknesses</p>
                    {card.weaknesses ? (
                      card.weaknesses.map((weakness, index) => (
                        <div className="icon-value-wrapper">
                          <img
                            className="type-icon"
                            key={index}
                            src={typeIcons[weakness.type.toLowerCase()]}
                          />
                          <p>{weakness.value}</p>
                        </div>
                      ))
                    ) : (
                      <p>?</p>
                    )}
                  </div>

                  <div className="stat">
                    <p className="stat-title">Retreat Cost</p>
                    {card.retreat ? <p>{card.retreat}</p> : <p>?</p>}
                  </div>
                </div>
              </div>

              <div className="ability-container">
                <h3>Ability</h3>
                <div className="ability-wrapper">
                  {card.abilities?.map((ability, index) => (
                    <p className="ability-name" key={index}>
                      {ability.name}
                    </p>
                  ))}
                  {card.abilities ? (
                    card.abilities.map((ability, index) => (
                      <p className="ability-effect" key={index}>
                        {ability.effect}
                      </p>
                    ))
                  ) : (
                    <p className="ability-effect">None</p>
                  )}
                </div>
              </div>

              <div className="attack-container">
                <h3>Attacks</h3>
                {card.attacks?.map((attack, index) => (
                  <div className="attack-wrapper" key={index}>
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

                    <div>
                      <p className="attack-effect">{attack.effect}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      <ToastContainer />
    </>
  );
}

export default CardItem;

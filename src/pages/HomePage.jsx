import { Link } from "react-router-dom";

import pokeball from "../assets/icons/logo/pokeball.png";

function HomePage() {
  return (
    <div className="home-container">
      <div className="title-container">
        <img src={pokeball} className="floating-pokeball" />
        <h1>Wanna Search 'Em All?</h1>
        <p>Then let's get to work, trainer!</p>
      </div>

      <div className="features-container">
        <div className="featureOne-wrapper">
          <img
            src="https://assets.tcgdex.net/en/xy/xy2/69/high.webp"
            className="card-one"
          />
          <div className="quote-button-wrapper">
            <div className="quote-wrapper">
              <h2>
                Speedy{" "}
                <strong>
                  <em>searching</em>{" "}
                </strong>
                of Pokémon cards
              </h2>
              <p>
                Fly through all PokémonTCG cards with our blazingly fast
                searching service, and filter cards to your liking!
              </p>
            </div>
            <Link className="start-button" to="/cards">
              Start Searching!
            </Link>
          </div>
        </div>

        <div className="featureTwo-wrapper">
          <div className="quote-button-wrapper">
            <div className="quote-wrapper">
              <h2>
                Easy{" "}
                <strong>
                  <em>tracking</em>
                </strong>{" "}
                of cards and collections
              </h2>
              <p>
                Add your favourite and owned cards to your party to show off to
                your friends!
              </p>
            </div>
            <Link className="start-button" to="/party">
              View Your Party!
            </Link>
          </div>
          <img
            src="https://assets.tcgdex.net/en/bw/bw11/RC24/high.webp"
            className="home-card-image card-two"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

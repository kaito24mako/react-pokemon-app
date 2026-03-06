import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-container">
      <div className="title-container">
        <h1>Wanna Search 'Em All?</h1>
        <p>Then let's get to work, trainer!</p>
      </div>
      <div className="features-container">
        {/* Feature 1 */}
        <div className="featureOne-wrapper">
          <img
            src="https://assets.tcgdex.net/en/xy/xy2/69/high.webp"
            className="home-card-image"
          />
          <div className="quote-button-wrapper">
            <div className="quote-wrapper">
              <h3>
                Speedy{" "}
                <strong>
                  <em>searching</em>{" "}
                </strong>
                of Pokemon cards
              </h3>
              <p>
                Fly through all PokemonTCG cards with our blazingly fast
                searching service, and filter cards to your liking!
              </p>
            </div>
            <Link className="start-button" to="/cards">
              Start Searching!
            </Link>
          </div>
        </div>
        {/* Feature 2 */}
        <div className="featureTwo-wrapper">
          <div className="quote-button-wrapper">
            <div className="quote-wrapper">
              <h3>
                Easy{" "}
                <strong>
                  <em>tracking</em>
                </strong>{" "}
                of cards and collections
              </h3>
              <p>
                Store your favourite and owned cards into your collection to
                show off to your friends!
              </p>
            </div>
            <Link className="start-button" to="/collection">
              Your Collection!
            </Link>
          </div>
          <img
            src="https://assets.tcgdex.net/en/bw/bw11/RC24/high.webp"
            className="home-card-image"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

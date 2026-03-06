import "./Filterbar.css";

// the vertical radio bar on Cards and Collection pages
function Filterbar() {
  return (
    <div className="filter-container">
      <form className="type-container" method="post">
        <h3>Cards by Type:</h3>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="filter-type"
            id="type-colorless"
            value="type-colorless"
          />
          <label for="type-colorless">Colorless</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="filter-type"
            id="type-dark"
            value="type-dark"
          />
          <label for="type-dark">Dark</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="filter-type"
            id="type-dragon"
            value="type-dragon"
          />
          <label for="type-dragon">Dragon</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="filter-type"
            id="type-fairy"
            value="type-fairy"
          />
          <label for="type-fairy">Fairy</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="filter-type"
            id="type-fighting"
            value="type-fighting"
          />
          <label for="type-fighting">Fighting</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="filter-type"
            id="type-fire"
            value="type-fire"
          />
          <label for="type-fire">Fire</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="filter-type"
            id="type-grass"
            value="type-grass"
          />
          <label for="type-grass">Grass</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="filter-type"
            id="type-lightning"
            value="type-lightning"
          />
          <label for="type-lightning">Lightning</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="filter-type"
            id="type-metal"
            value="type-metal"
          />
          <label for="type-metal">Metal</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="filter-type"
            id="type-psychic"
            value="type-psychic"
          />
          <label for="type-psychic">Psychic</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="filter-type"
            id="type-water"
            value="type-water"
          />
          <label for="type-water">Water</label>
        </div>
      </form>

      <form className="variant-container" method="post">
        <h3>Cards by Variant:</h3>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="filter-variant"
            id="variant-firstEd"
            value="variant-firstEd"
          />
          <label for="variant-firstEd">First Edition</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="filter-variant"
            id="variant-firstEd"
            value="variant-firstEd"
          />
          <label for="variant-firstEd">Holo</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="filter-variant"
            id="variant-normal"
            value="variant-normal"
          />
          <label for="variant-normal">Normal</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="filter-variant"
            id="variant-reverse"
            value="variant-reverse"
          />
          <label for="variant-reverse">Reverse</label>
        </div>
        <div className="input-wrapper">
          <input
            type="checkbox"
            name="filter-variant"
            id="variant-promo"
            value="variant-promo"
          />
          <label for="variant-promo">Promo</label>
        </div>
      </form>
    </div>
  );
}

export default Filterbar;

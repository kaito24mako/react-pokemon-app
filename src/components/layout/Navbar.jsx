import { Link } from "react-router-dom";

import ThemeToggle from "../features/theme/ThemeToggle";

import pokeball from "../../assets/pokeball.png";

function Navbar({ handleThemeToggle, isDark }) {
  return (
    <div className="nav-container">
      <Link className="logo-title-button" to="/">
        <h1 className="logo">
          <img src={pokeball} className="pokeball" /> Search 'Em All!
        </h1>
      </Link>

      <div className="ui-container">
        <div className="pages-container">
          <Link className="link" to="/cards">
            Cards
          </Link>
          <Link className="link" to="/party">
            My Party
          </Link>
          <ThemeToggle handleThemeToggle={handleThemeToggle} isDark={isDark} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

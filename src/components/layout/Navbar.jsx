import { Link } from "react-router-dom";
import { playClickSound } from "../../components/audio/click";

import ThemeToggle from "../features/theme/ThemeToggle";

import pokeball from "../../assets/icons/logo/pokeball.png";

function Navbar({ handleThemeToggle, isDark }) {
  return (
    <div className="navbar-container">
      <Link className="logo-title-wrapper" to="/" onClick={playClickSound}>
        <h1 className="logo">
          <img src={pokeball} className="pokeball" /> Search 'Em All!
        </h1>
      </Link>

      <div className="page-links-container">
        <Link className="link" to="/cards" onClick={playClickSound}>
          Cards
        </Link>
        <Link className="link" to="/party" onClick={playClickSound}>
          My Party
        </Link>
        <ThemeToggle handleThemeToggle={handleThemeToggle} isDark={isDark} />
      </div>
    </div>
  );
}

export default Navbar;

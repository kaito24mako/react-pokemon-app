import { Link } from "react-router-dom";

import ThemeToggle from "../features/theme/ThemeToggle";
import pokeball from "../../assets/icons/logo/pokeball.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <Link className="logo-title-wrapper" to="/">
        <h1 className="logo">
          <img src={pokeball} className="pokeball" /> Search 'Em All!
        </h1>
      </Link>

      <div className="page-links-container">
        <Link className="link" to="/cards">
          Cards
        </Link>
        <Link className="link" to="/party">
          My Party
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;

import { Link } from "react-router-dom";

import "./Navbar.css";

import ThemeToggle from "../features/theme/ThemeToggle";

function Navbar() {
  return (
    <div className="nav-container">
      <Link className="logo-title-button" to="/">
        <h1 className="logo">🗃️ Search 'Em All!</h1>
      </Link>

      <div className="ui-container">
        <div className="pages-container">
          <Link className="link" to="/cards">
            Cards
          </Link>
          <Link className="link" to="/collection">
            Collection
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

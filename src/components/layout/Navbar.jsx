import { Link } from "react-router-dom";

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
          <Link className="link" to="/party">
            My Party
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

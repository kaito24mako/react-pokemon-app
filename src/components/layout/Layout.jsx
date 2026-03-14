import { Outlet } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />

      <div className="app-content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;

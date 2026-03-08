import { Outlet } from "react-router-dom";

import { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const [isDark, setIsDark] = useState(false);

  function handleThemeToggle() {
    // toggles the value of the current state
    setIsDark((prev) => !prev);
  }

  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      <Navbar handleThemeToggle={handleThemeToggle} isDark={isDark} />
      <div className="app-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

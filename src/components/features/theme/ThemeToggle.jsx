import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

import "./ThemeToggle.css";

function ThemeToggle() {
  return (
    <button className="theme-buttons">
      <MdOutlineLightMode />
      <MdDarkMode />
    </button>
  );
}

export default ThemeToggle;

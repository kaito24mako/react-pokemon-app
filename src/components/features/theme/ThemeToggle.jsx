import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

function ThemeToggle() {
  return (
    <button className="theme-buttons">
      <MdOutlineLightMode />
      <MdDarkMode />
    </button>
  );
}

export default ThemeToggle;

import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeToggle({ handleThemeToggle, isDark }) {
  return (
    <button
      className={`theme-buttons ${isDark ? "rotate-dark" : "rotate-light"}`}
      onClick={handleThemeToggle}
    >
      {isDark ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
}

export default ThemeToggle;

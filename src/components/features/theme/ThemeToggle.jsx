import { MdDarkMode, MdLightMode } from "react-icons/md";
import { playSwitchSound } from "../../audio/switch";

function ThemeToggle({ handleThemeToggle, isDark }) {
  return (
    <button
      className={`theme-buttons ${isDark ? "rotate-dark" : "rotate-light"}`}
      onClick={() => {
        handleThemeToggle();
        playSwitchSound();
      }}
    >
      {isDark ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
}

export default ThemeToggle;

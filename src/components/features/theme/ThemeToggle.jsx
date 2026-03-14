import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../../../context/ThemeContext";
import { playSwitchSound } from "../../audio/switch";

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className={`theme-buttons ${isDark ? "rotate-dark" : "rotate-light"}`}
      onClick={() => {
        toggleTheme();
        playSwitchSound();
      }}
    >
      {isDark ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
}

export default ThemeToggle;

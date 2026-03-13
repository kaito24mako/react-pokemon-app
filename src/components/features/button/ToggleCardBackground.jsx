import { playSwitchSound } from "../../audio/switch";

function ToggleCardBackground({ toggleColouredCardBg, colouredBackground }) {
  return (
    <button
      className={colouredBackground ? "coloured-card" : "non-coloured-card"}
      onClick={() => {
        playSwitchSound();
        toggleColouredCardBg();
      }}
    >
      {colouredBackground ? "Coloured Cards" : "Non-coloured Cards"}
    </button>
  );
}

export default ToggleCardBackground;

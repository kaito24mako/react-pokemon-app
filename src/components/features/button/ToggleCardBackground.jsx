import { playSwitchSound } from "../../audio/switch";

function ToggleCardBackground({
  handleColouredBackground,
  colouredBackground,
}) {
  return (
    <button
      className={colouredBackground ? "coloured-card" : "non-coloured-card"}
      onClick={() => {
        playSwitchSound();
        handleColouredBackground();
      }}
    >
      {colouredBackground ? "Coloured Cards" : "Non-coloured Cards"}
    </button>
  );
}

export default ToggleCardBackground;

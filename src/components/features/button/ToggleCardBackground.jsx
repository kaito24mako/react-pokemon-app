function ToggleCardBackground({
  handleColouredBackground,
  colouredBackground,
}) {
  return (
    <button
      className={colouredBackground ? "coloured-card" : "non-coloured-card"}
      onClick={handleColouredBackground}
    >
      {colouredBackground ? "Coloured Cards" : "Non-coloured Cards"}
    </button>
  );
}

export default ToggleCardBackground;

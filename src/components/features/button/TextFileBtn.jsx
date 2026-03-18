function TextFileBtn({ favourites }) {
  function createTextFile() {
    const cards = Array.isArray(favourites) ? favourites : [];

    const fileContent =
      cards.length > 0
        ? cards
            .map((card, index) => {
              const cardName = card?.name || "Unknown name";
              const cardId = card?.id || "Unknown id";

              return `${index + 1}. ${cardName} (ID: ${cardId})`;
            })
            .join("\n")
        : "No favourite pokemon found.";

    const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "favourite_pokemon.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <button
      className="coloured-card"
      style={{ marginLeft: "12px", backgroundColor: "black" }}
      onClick={() => {
        createTextFile();
      }}
    >
      <div style={{ display: "flex" }}>
        <p>Create Text File</p>
      </div>
    </button>
  );
}

export default TextFileBtn;

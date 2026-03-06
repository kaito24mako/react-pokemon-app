import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

import Layout from "./components/layout/Layout";

import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";
import NotFound from "./pages/NotFound";
import CollectionPage from "./pages/CollectionPage";

function App() {
  const [cards, setCards] = useState([]); // for list of cards
  const [cardItem, setCardItem] = useState([]); // for single card item
  const [search, setSearch] = useState(""); // string of searched card
  const [fetchingCards, setFetchingCards] = useState(false); // loading spinner when data hasn't rendered

  async function fetchCardsByName() {
    try {
      setFetchingCards(true);
      const response = await axios.get(
        `https://api.tcgdex.net/v2/en/cards?name=${search}`,
      );

      // filter cards that don't have an image
      // edit the image url to render it
      const filteredCards = response.data
        .filter((card) => card.image)
        .map((card) => ({
          id: card.id,
          name: card.name,
          image: `${card.image}/high.webp`,
        }));

      console.log(filteredCards);
      setCards(filteredCards);

      setTimeout(() => {
        setFetchingCards(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  }

  // gets more detailed object of the card that's clicked
  async function fetchCardById(id) {
    try {
      const response = await axios.get(
        `https://api.tcgdex.net/v2/en/cards/${id}`,
      );
      const data = response.data;

      const editedCard = {
        ...data,
        image: `${data.image}/high.webp`,
      };

      setCardItem([editedCard]);
      console.log(editedCard);
    } catch (error) {
      console.error("Error fetching card details:", error);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchCardsByName();
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<HomePage search={search} handleSearch={handleSearch} />}
        />
        <Route
          path="/cards"
          element={
            <CardsPage
              cards={cards}
              search={search}
              cardItem={cardItem}
              handleSearch={handleSearch}
              handleSubmit={handleSubmit}
              fetchingCards={fetchingCards}
              fetchCardById={fetchCardById}
              setCardItem={setCardItem}
            />
          }
        />
        <Route
          path="/collection"
          element={
            <CollectionPage
              cards={cards}
              search={search}
              cardItem={cardItem}
              handleSearch={handleSearch}
              handleSubmit={handleSubmit}
              fetchingCards={fetchingCards}
              fetchCardById={fetchCardById}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

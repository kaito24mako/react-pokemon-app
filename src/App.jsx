import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";

import axios from "axios";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";
import CollectionPage from "./pages/CollectionPage";
import NotFound from "./pages/NotFound";

function App() {
  const [cards, setCards] = useState([]); // for list of cards
  const [detailedCard, setDetailedCard] = useState([]); // for single card item
  const [search, setSearch] = useState(""); // string of searched card
  const [fetchingCards, setFetchingCards] = useState(false); // for spinner loader
  const [clickedCard, setClickedCard] = useState(); // to track if a card was clicked

  // used Cursor AI to help!
  // 1. calls localStorage only on the first render (mount)
  // 2. getItem returns a string if favourites exists and turns/parses it into a JSON array, otherwise start with an empty array
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  // 3. saves the updated favourites array to localStorage whenever it changes
  // stringify converts it to a string for localStorage to store
  // useEffect keeps storage in sync whenever favourites change
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites), [
      favourites,
    ]);
  });

  // 4. adds or removes the card from the favourites array
  // card is from detailedCard.jsx, in which the clicked card is mapped over to show its details
  function toggleFavourite(card) {
    setFavourites((prev) => {
      // checks if this card is already in favourites
      const inCollection = prev.some((c) => c.id === card.id);
      console.log(favourites);
      // if it exists, returns new array with that card removed
      // if it doesn't exist, returns new array with that card added
      if (inCollection) {
        return prev.filter((c) => c.id !== card.id);
      } else {
        return [...prev, { id: card.id, name: card.name, image: card.image }];
      }
    });
  }

  async function fetchCardsByName() {
    try {
      setFetchingCards(true);
      const response = await axios.get(
        `https://api.tcgdex.net/v2/en/cards?name=${search}`,
      );

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

      console.log(editedCard);
      setDetailedCard([editedCard]);
    } catch (error) {
      console.error("Error fetching card details:", error);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleSubmitSearch(trimmed) {
    fetchCardsByName(trimmed);
  }

  // open the card item modal when a card is clicked
  function showClickedCard(card) {
    setClickedCard(card);
  }

  return (
    <ThemeProvider>
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
                detailedCard={detailedCard}
                handleSearch={handleSearch}
                handleSubmitSearch={handleSubmitSearch}
                fetchingCards={fetchingCards}
                fetchCardById={fetchCardById}
                setDetailedCard={setDetailedCard}
                favourites={favourites}
                toggleFavourite={toggleFavourite}
                clickedCard={clickedCard}
                setClickedCard={setClickedCard}
                showClickedCard={showClickedCard}
              />
            }
          />
          <Route
            path="/party"
            element={
              <CollectionPage
                detailedCard={detailedCard}
                setDetailedCard={setDetailedCard}
                fetchingCards={fetchingCards}
                fetchCardById={fetchCardById}
                favourites={favourites}
                toggleFavourite={toggleFavourite}
                clickedCard={clickedCard}
                setClickedCard={setClickedCard}
                showClickedCard={showClickedCard}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

import { ToastContainer, toast } from "react-toastify";

function SearchForm({ search, handleSearch, handleSubmitSearch, children }) {
  // e is the current "event", which in this case is the search form
  function handleValidation(e) {
    // stops the form from submitting its default way, preventing the browser from re-loading
    e.preventDefault();

    // removes whitespaces
    const trimmed = search.trim("");

    // toastify configurations
    const toastSettings = {
      closeOnClick: true,
      theme: "colored",
      pauseOnHover: false,
    };

    // if no pokemon names were searched
    if (!trimmed) return toast.error("Please enter a card name", toastSettings);

    // if there were any special characters searched
    if (/[^a-zA-Z0-9\s-]/.test(trimmed))
      return toast.error(
        "Search must contain no special characters",
        toastSettings,
      );

    // if the search contains less than 3 characters
    if (trimmed.length < 3)
      return toast.error("Search must be at least 3 characters", toastSettings);

    // if the search contains more than 50 letters
    if (trimmed.length > 50)
      return toast.error("Search is too long", toastSettings);

    // calls the function from App.jsx, which fetches the relevant data from the Pokemon API
    handleSubmitSearch(trimmed);
  }
  return (
    <div className="form-error-container">
      <form className="form-container" onSubmit={handleValidation}>
        <label htmlFor="card-search">🔎</label>
        <input
          type="search"
          id="card-search"
          className="search-field"
          placeholder="search card..."
          value={search}
          onChange={handleSearch}
          aria-label="Search for Pokemon cards"
        />
      </form>
      {children}
    </div>
  );
}

export default SearchForm;

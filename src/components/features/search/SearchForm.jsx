import { ToastContainer, toast } from "react-toastify";

function SearchForm({ search, handleSearch, handleSubmitSearch }) {
  function handleValidation(e) {
    e.preventDefault();

    const trimmed = search.trim("");

    const toastSettings = {
      closeOnClick: true,
      theme: "colored",
      pauseOnHover: false,
    };

    if (!trimmed) return toast.error("Please enter a card name", toastSettings);

    if (/[^a-zA-Z0-9\s-]/.test(trimmed))
      return toast.error(
        "Search must contain no special characters",
        toastSettings,
      );

    if (trimmed.length < 3)
      return toast.error("Search must be at least 3 characters", toastSettings);

    if (trimmed.length > 50)
      return toast.error("Search is too long", toastSettings);

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
      <ToastContainer />
    </div>
  );
}

export default SearchForm;

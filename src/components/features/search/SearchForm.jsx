// import { useForm } from "react-router-dom";
// import Joi from "joi";
// import { joiResolver } from "@hookform/resolvers/joi";

function SearchForm({ search, handleSearch, handleSubmit }) {
  // const schema = Joi.object({
  //   search: Joi.string().min(1).max(255),
  // });

  // const {
  //   control,
  //   handleSubmit,
  //   register,
  //   formState: { errors },
  // } = useForm({
  //   resolver: joinResolver(schema),
  // });

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label for="card-search">🔎</label>
      <input
        type="search"
        id="card-search"
        className="search-field"
        placeholder="search card..."
        value={search}
        onChange={handleSearch}
        aria-label="search for Pokemon cards"
      />
    </form>
  );
}

export default SearchForm;

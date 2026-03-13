import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound-container">
      <h2>404 Error</h2>
      <h1>Page Not Found</h1>
      <p>I'm sorry, the page you are looking for does not exist!</p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default NotFound;

import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div className="home-container">
      <div className="search-bar">
        <SearchBar />
      </div>
      <button type="button" class="btn btn-primary">
        Go to my saved lists.
      </button>
    </div>
  );
};

export default Home;

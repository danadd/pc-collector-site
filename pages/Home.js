import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";
import Link from "next/link";

const Home = () => {
  return (
    <div className="home-container">
      <div className="search-bar">
        <SearchBar />
      </div>
      <Link href="">
        <button type="button" class="btn btn-primary">
          Go to my saved lists.
        </button>
      </Link>
    </div>
  );
};

export default Home;

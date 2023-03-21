// turn this into a reusable component where it will look and see "what did the user click on (ie. Favorite) and show Favorites". Is that possible? Or maybe have tabs similar to the PC page where they select what they want to view and ONLY that list will be shown for printing/saving/etc UNLESS they select ALL.
// So need state for "Favorite", "OTW", "Collected" from the WishlistMenu comp.

// Select from album PCs or non-album PCs here

import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const Wishlist = () => {
  const [favoriteClicked, setFavoriteClicked] = useState(false);
  const [collectedClicked, setCollectedClicked] = useState(false);
  const [otwClicked, setOTWClicked] = useState(false);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setFavoriteClicked((value) => !value);
  };

  const handleCollectedClick = (e) => {
    e.preventDefault();
    setCollectedClicked((value) => !value);
  };

  const handleOTWClick = (e) => {
    e.preventDefault();
    setOTWClicked((value) => !value);
  };

  return (
    <div className="pc-type-selection-container container">
      <button type="button" className="btn btn-primary" onClick={handleFavoriteClick}>
        My Favorites
      </button>

      <button type="button" className="btn btn-primary" onClick={handleCollectedClick}>
        My Collection
      </button>

      <button type="button" className="btn btn-primary" onClick={handleOTWClick}>
        On The Way
      </button>
      {/* 
      {favoriteClicked ? <Favorites /> : null}

      {collectedClicked ? <Collected/> : null}

      {otwClicked ? <OTW /> : null} */}

      <Link href="/Home">
        <button type="button" className="btn btn-primary">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

// From this page the user can select which type of PCs they'd like to look at. Once they click then show the list of PCs on this page. I think that makes most sense instead of taking them to a whole nother page.

export default Wishlist;

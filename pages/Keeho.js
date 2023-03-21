// Select from album PCs or non-album PCs here

import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import KeehoAlbum from "./KeehoAlbum";
import KeehoNonAlbum from "./KeehoNonAlbum";
import Link from "next/link";

const Keeho = () => {
  const [albumClicked, setAlbumClicked] = useState(false);
  const [nonAlbumClicked, setNonAlbumClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setAlbumClicked((value) => !value);
  };

  const handleNonAlbumClick = (e) => {
    e.preventDefault();
    setNonAlbumClicked((value) => !value);
  };

  return (
    <div className="pc-type-selection-container container">
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Keeho Album PCs
      </button>

      <button type="button" className="btn btn-primary" onClick={handleNonAlbumClick}>
        Keeho Non-Album PCs
      </button>

      {albumClicked ? <KeehoAlbum /> : null}

      {nonAlbumClicked ? <KeehoNonAlbum /> : null}

      <Link href="/Home">
        <button type="button" className="btn btn-primary">
          Back To Home
        </button>
      </Link>
      <Link href="/Wishlist">
        <button type="button" class="btn btn-primary">
          Go to my saved lists.
          {/* think about the UI. Would it be better to just click on one button and then go to another page similar to the PC Album/Non-Album page and have the user to click on their favorites vs otw vs collected vs etc? Or have buttons for each list? I think the former is better */}
        </button>
      </Link>
    </div>
  );
};

// From this page the user can select which type of PCs they'd like to look at. Once they click then show the list of PCs on this page. I think that makes most sense instead of taking them to a whole nother page.

export default Keeho;

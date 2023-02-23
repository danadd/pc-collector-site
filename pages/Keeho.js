// Select from album PCs or non-album PCs here

import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import KeehoAlbum from "./KeehoAlbum";
import KeehoNonAlbum from "./KeehoNonAlbum";

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

  console.log(albumClicked);
  return (
    <div className="pc-type-selection-container">
      <button type="button" class="btn btn-primary" onClick={handleClick}>
        Keeho Album PCs
      </button>
      {albumClicked ? <KeehoAlbum /> : null}

      <button type="button" class="btn btn-primary" onClick={handleNonAlbumClick}>
        Keeho Album PCs
      </button>
      {nonAlbumClicked ? <KeehoNonAlbum /> : null}
    </div>
  );
};

// From this page the user can select which type of PCs they'd like to look at. Once they click then show the list of PCs on this page. I think that makes most sense instead of taking them to a whole nother page.

export default Keeho;

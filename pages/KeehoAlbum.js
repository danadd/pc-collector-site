import { useState } from "react";
import WishlistMenu from "./WishlistMenu";

const KeehoAlbum = () => {
  const keehoAlbumPCs = [
    // Stand Out
    {
      name: "Stand Out A",
      img: "SOA.png",
      id: "SO-A",
      era: "Stand Out",
      type: "Album",
    },
    {
      name: "Stand Out B",
      img: "SOB.png",
      id: "SO-B",
      era: "Stand Out",
      type: "Album",
    },
    // Break Out
    {
      name: "Break Out A",
      img: "BOA.png",
      id: "BO-A",
      era: "Break Out",
      type: "Album",
    },
    {
      name: "Break Out B",
      img: "BOB.png",
      id: "BO-B",
      era: "Break Out",
      type: "Album",
    },
    {
      name: "Freak Out A",
      img: "FOA.png",
      id: "FO-A",
      era: "Break Out",
      type: "Album",
    },
    {
      name: "Freak Out B",
      img: "FOB.png",
      id: "FO-B",
      era: "Break Out",
      type: "Album",
    },
    // Find Out
    {
      name: "Find Out A",
      img: "FIOA.png",
      id: "FIO-A",
      era: "Find Out",
      type: "Album",
    },
    {
      name: "Find Out B",
      img: "FIOB.png",
      id: "FIO-B",
      era: "Find Out",
      type: "Album",
    },
    {
      name: "Turn Out A",
      img: "TOA.png",
      id: "TO-A",
      era: "Find Out",
      type: "Album",
    },
    {
      name: "Turn Out B",
      img: "TOB.png",
      id: "TO-B",
      era: "Find Out",
      type: "Album",
    },
    {
      name: "World A",
      img: "WorldA.png",
      id: "World-A",
      era: "Find Out",
      type: "Album",
    },
    {
      name: "World B",
      img: "WorldB.png",
      id: "World-B",
      era: "Find Out",
      type: "Album",
    },
    {
      name: "Find Out English/Jewel Case A",
      img: "FOJCA.png",
      id: "FOJC-A",
      era: "Find Out",
      type: "Album",
    },
    {
      name: "Find Out English/Jewel Case B",
      img: "FOJCB.png",
      id: "FOJC-B",
      era: "Find Out",
      type: "Album",
    },
    {
      name: "Find Out English/Jewel Case Clear Card",
      img: "FOJCC.png",
      id: "FOJC-C",
      era: "Find Out",
      type: "Album",
    },
    // Zero In
    {
      name: "Zero In A",
      img: "ZIA.png",
      id: "ZI-A",
      era: "Zero In",
      type: "Album",
    },
    {
      name: "Zero In B",
      img: "ZIB.png",
      id: "ZI-B",
      era: "Zero In",
      type: "Album",
    },
    {
      name: "Kick In A",
      img: "KIA.png",
      id: "KI-A",
      era: "Zero In",
      type: "Album",
    },
    {
      name: "Kick In B",
      img: "KIB.png",
      id: "KI-B",
      era: "Zero In",
      type: "Album",
    },
    {
      name: "Platform A",
      img: "ZIPlatformA.png",
      id: "ZIPlatform-A",
      era: "Zero In",
      type: "Album",
    },
    {
      name: "Platform B",
      img: "ZIPlatformB.png",
      id: "ZIPlatform-B",
      era: "Zero In",
      type: "Album",
    },
    {
      name: "Special A",
      img: "ZISpecialA.png",
      id: "ZISpecial-A",
      era: "Zero In",
      type: "Album",
    },
    {
      name: "Special B",
      img: "ZISpecialB.png",
      id: "ZISpecial-B",
      era: "Zero In",
      type: "Album",
    },
    // Set In
    {
      name: "Set In A",
      img: "SIA.png",
      id: "SI-A",
      era: "Set In",
      type: "Album",
    },
    {
      name: "Set In B",
      img: "SIB.png",
      id: "SI-B",
      era: "Set In",
      type: "Album",
    },
    {
      name: "Step In A",
      img: "STIA.png",
      id: "STI-A",
      era: "Set In",
      type: "Album",
    },
    {
      name: "Step In B",
      img: "STIB.png",
      id: "STI-B",
      era: "Set In",
      type: "Album",
    },
    {
      name: "Grow In A",
      img: "GIA.png",
      id: "GI-A",
      era: "Set In",
      type: "Album",
    },
    {
      name: "Grow In B",
      img: "GIB.png",
      id: "GI-B",
      era: "Set In",
      type: "Album",
    },
    {
      name: "Platform A",
      img: "SIPlatformA.png",
      id: "SIPlatform-A",
      era: "Set In",
      type: "Album",
    },
    {
      name: "Platform B",
      img: "SIPlatformB.png",
      id: "SIPlatform-B",
      era: "Set In",
      type: "Album",
    },
    {
      name: "Special A",
      img: "SISpecialA.png",
      id: "SISpecial-A",
      era: "Zero In",
      type: "Album",
    },
    {
      name: "Special B",
      img: "SISpecialB.png",
      id: "SISpecial-B",
      era: "Zero In",
      type: "Album",
    },
    {
      name: "Special C",
      img: "SISpecialC.png",
      id: "SISpecial-C",
      era: "Zero In",
      type: "Album",
    },
  ];

  const [menuToggle, setMenuToggle] = useState(null);

  const handleClick = (id) => {
    setMenuToggle(id);
    // needs more logic to shut the menu if they click the image again
  };

  const [favorites, setFavorites] = useState([]);

  const handleFavoriteClick = (id) => {
    // Check if the image is already in favorites
    if (!favorites.includes(id)) {
      // If not, add it to the favorites list
      setFavorites([...favorites, id]);
    }
    // how will they remove the card from their favorites if they want to? Remember to add that functionality
  };

  const [collected, setCollected] = useState([]);

  const handleCollectedClick = (id) => {
    if (!collected.includes(id)) {
      setCollected([...collected, id]);
    }
  };

  const [otw, setOTW] = useState([]);

  const handleOTWClick = (id) => {
    if (!otw.includes(id)) {
      setOTW([...otw, id]);
    }
  };

  console.log(favorites, "favorites");
  console.log(collected, "collected");
  console.log(collected, "otw");

  return (
    <div className="pc-list-container container">
      <div className="row">
        {keehoAlbumPCs.map((keehoAlbumPC) => (
          <div key={keehoAlbumPC.id} className="individual-pc-container col col-md-4">
            {/* on click the image will be greyed out and saved to their "PC List" for the first pass */}
            {/* on click open a menu to save to list, otw, or wishlisted */}
            <img
              src={keehoAlbumPC.img}
              className="pc_image"
              onClick={() => handleClick(keehoAlbumPC.id)}
            />
            {menuToggle === keehoAlbumPC.id && (
              <WishlistMenu
                onFavoriteClick={() => handleFavoriteClick(keehoAlbumPC.id)}
                onCollectedClick={() => handleCollectedClick(keehoAlbumPC.id)}
                onOTWClick={() => handleOTWClick(keehoAlbumPC.id)}
              />
            )}

            <div className="row">
              <span>{keehoAlbumPC.name}</span>
            </div>

            <div className="row">
              <span>{keehoAlbumPC.era}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeehoAlbum;

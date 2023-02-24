const KeehoAlbum = () => {
  const keehoAlbumPCs = [
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
  ];

  return (
    <div className="pc-list-container container">
      <div className="row">
        {keehoAlbumPCs.map((keehoAlbumPC) => (
          <div key={keehoAlbumPC.id} className="individual-pc-container col col-md-4">
            {/* on click the image will be greyed out and saved to their "PC List" for the first pass */}
            {/* on click open a menu to save to list, otw, or wishlisted */}
            <img src={keehoAlbumPC.img} className="pc_image" />

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

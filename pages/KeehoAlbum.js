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
    <div className="pc-list-container">
      {keehoAlbumPCs.map((keehoAlbumPC) => (
        <div key={keehoAlbumPC.id}>
          <span>
            {/* on click the image will be greyed out and saved to their "PC List" for the first pass */}
            <img src={keehoAlbumPC.img} className="pc_image" />
          </span>

          <span>{keehoAlbumPC.name}</span>

          <span>
            <span>{keehoAlbumPC.era}</span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default KeehoAlbum;

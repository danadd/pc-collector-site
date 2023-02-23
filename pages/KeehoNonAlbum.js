const KeehoNonAlbum = () => {
  // move to an API or JSON later
  const keehoNonAlbumPCs = [
    {
      name: "Broadcast Benefit A",
      img: "keeho.png",
      id: 1,
      era: "Set In",
    },
    { name: "Broadcast Benefit B", img: "blah", id: 2, era: "Set In" },
    { name: "Broadcast Benefit C", img: "blah", id: 3, era: "Set In" },
  ];

  return (
    <div className="pc-list-container container">
      {keehoNonAlbumPCs.map((keehoNonAlbumPC) => (
        <div key={keehoNonAlbumPC.id}>
          <span>
            <img src={keehoNonAlbumPC.img} height="250px" width="200px" />
          </span>

          <span>{keehoNonAlbumPC.name}</span>

          <span>
            <span>{keehoNonAlbumPC.era}</span>
          </span>
          {/* Would it make sense for a user to click on non-album or album PC from here? It would save on some code for now */}
        </div>
      ))}

      <div>{/* Columns of 3-5 cards per row on a medium laptop screen */}</div>
    </div>
  );
};

export default KeehoNonAlbum;

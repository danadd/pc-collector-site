const KeehoNonAlbum = () => {
  // move to an API or JSON later
  const keehoNonAlbumPCs = [
    // Break Out
    {
      name: "KTown 4U A",
      img: "ktown4uA-BO1.png",
      id: "BO-1",
      era: "Break Out",
      type: "POB",
    },
    {
      name: "KTown 4U B",
      img: "ktown4uB-BO2.png",
      id: "BO-2",
      era: "Break Out",
      type: "POB",
    },
    {
      name: "WEVERSE",
      img: "weverse-BO3.png",
      id: "BO-3",
      era: "Break Out",
      type: "POB",
    },
    {
      name: "MyMusicTaste Rd 1",
      img: "",
      id: "BO-4",
      era: "Break Out",
      type: "POB",
    },
    {
      name: "MyMusicTaste Rd 2",
      img: "",
      id: "BO-5",
      era: "Break Out",
      type: "POB",
    },
    {
      name: "Everline",
      img: "",
      id: "BO-6",
      era: "Break Out",
      type: "POB",
    },
    {
      name: "Apple Music 1",
      img: "",
      id: "BO-7",
      era: "Break Out",
      type: "POB",
    },
    {
      name: "Apple Music 2",
      img: "",
      id: "BO-8",
      era: "Break Out",
      type: "POB",
    },
    {
      name: "Wonderwall Polaroid",
      img: "",
      id: "BO-9",
      era: "Break Out",
      type: "POB",
    },
    {
      name: "Wonderwall 1",
      img: "",
      id: "BO-10",
      era: "Break Out",
      type: "POB",
    },
    {
      name: "Wonderwall 2",
      img: "",
      id: "BO-11",
      era: "Break Out",
      type: "POB",
    },
    {
      name: "Wonderwall 3",
      img: "",
      id: "BO-12",
      era: "Break Out",
      type: "POB",
    },
    {
      name: "FNC Store 1",
      img: "",
      id: "BO-13",
      era: "Break Out",
      type: "POB",
    },
    {
      name: "FNC Store 2",
      img: "",
      id: "BO-14",
      era: "Break Out",
      type: "POB",
    },
    {
      name: "YZY (Yizhiyu WithFans) 1",
      img: "",
      id: "BO-15",
      era: "Break Out",
      type: "POB",
    },
    {
      name: "YZY (Yizhiyu WithFans) 2",
      img: "",
      id: "BO-16",
      era: "Break Out",
      type: "POB",
    },
    {
      name: "Broadcast Benefit 1",
      img: "",
      id: "BO-17",
      era: "Break Out",
      type: "Broadcast",
    },
    {
      name: "Broadcast Benefit 2",
      img: "",
      id: "BO-18",
      era: "Break Out",
      type: "Broadcast",
    },

    // Set In
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
      <div className="row">
        {keehoNonAlbumPCs.map((keehoNonAlbumPC) => (
          <div key={keehoNonAlbumPC.id} className="individual-pc-container col col-md-4">
            {/* on click the image will be greyed out and saved to their "PC List" for the first pass */}
            <img src={keehoNonAlbumPC.img} className="pc_image" />

            <div className="row">
              <span>{keehoNonAlbumPC.name}</span>
            </div>

            <div className="row">
              <span>{keehoNonAlbumPC.era}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeehoNonAlbum;

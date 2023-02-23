import { useState } from "react";

// move this to an API or json later
export const members = [
  {
    name: "Keeho",
    group: "P1Harmony",
    id: 1,
    url: "/Keeho",
    img: "/HeadShots/keeho.jpg",
    albumPCs: "/keeho-album",
    nonAlbumPCs: "/keeho-non-album",
  },
  {
    name: "Theo",
    group: "P1Harmony",
    id: 2,
    url: "",
  },
  { name: "Jiung", group: "P1Harmony", id: 3, url: "" },
  { name: "Intak", group: "P1Harmony", id: 4, url: "" },
  { name: "Soul", group: "P1Harmony", id: 5, url: "" },
  { name: "Jongseob", group: "P1Harmony", id: 6, url: "" },
];

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const filteredMemberList = members.filter((member) =>
    member.name.toLowerCase().startsWith(searchInput.toLowerCase())
  );
  const filteredGroupList = members.filter((member) =>
    member.group.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Search by group or member"
        onChange={handleChange}
        value={searchInput}
      />
      <div className="member-card-list">
        {searchInput && searchInput.length > 0 ? (
          filteredMemberList.map((member) => (
            <div key={member.id}>
              <span>
                {member.name}
                {/* Can also use nextjs for routing */}
              </span>
              <span>{member.group}</span>
              <span>
                <img src={member.img} height="50px" width="50px" />
              </span>
              <span>
                <a href={member.url}>Go to my PC List</a>
              </span>
              {/* would be helpful to have a picture of the member for new fans/people. */}
              {/* Would it make sense for a user to click on non-album or album PC from here? It would save on some code for now */}
            </div>
          ))
        ) : (
          // needs to display ONLY if they have typed in the bar
          <h1>No results found! Try another search.</h1>
        )}
      </div>
    </div>
  );
};
export default SearchBar;

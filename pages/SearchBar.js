import { useState } from "react";

// move this to an API or json later
export const members = [
  {
    name: "Keeho",
    group: "P1Harmony",
    id: 1,
    url: "/Keeho",
    img: "keeho.png",
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

  const filteredMemberAndGroupList = members.filter(
    (memberGroup) =>
      memberGroup.name.toLowerCase().startsWith(searchInput.toLowerCase()) ||
      memberGroup.group.toLowerCase().includes(searchInput.toLowerCase())
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
          filteredMemberAndGroupList.map((member) => (
            <div key={member.id}>
              <img src={member.img} className="pc_image" />
              <span>{member.name}</span>
              <span>{member.group}</span>
              <span></span>
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

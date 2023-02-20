import { useState } from "react";

// move this to an API or json later
const members = [
  {
    name: "Keeho",
    group: "P1Harmony",
    id: 1,
  },
  { name: "Theo", group: "P1Harmony", id: 2 },
  { name: "Jiung", group: "P1Harmony", id: 3 },
  { name: "Intak", group: "P1Harmony", id: 4 },
  { name: "Soul", group: "P1Harmony", id: 5 },
  { name: "Jongseob", group: "P1Harmony", id: 6 },
];

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const filteredMemberList = members.filter((member) =>
    member.name.toLowerCase().match(searchInput.toLowerCase())
  );
  const filteredGroupList = members.filter((member) =>
    member.group.toLowerCase().match(searchInput.toLowerCase())
  );

  console.log(filteredMemberList);

  return (
    <div className="searchbar-container">
      <p>I am a search bar</p>
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
              <span>{member.name}</span> <span>{member.group}</span>
            </div>
          ))
        ) : (
          <h1>No results found! Try another search.</h1>
        )}
      </div>
    </div>
  );
};
export default SearchBar;

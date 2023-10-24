import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// move this to an API or json later
export const members = [
  {
    name: "Keeho",
    group: "P1Harmony",
    group_url: "/P1Harmony",
    id: 1,
    url: "/Keeho",
    img: "keeho.png",
  },
  {
    name: "Theo",
    group: "P1Harmony",
    group_url: "/P1Harmony",
    id: 2,
    url: "",
    img: "theo.png",
  },
  {
    name: "Jiung",
    group: "P1Harmony",
    group_url: "/P1Harmony",
    id: 3,
    url: "",
    img: "jiung.png",
  },
  {
    name: "Intak",
    group: "P1Harmony",
    group_url: "/P1Harmony",
    id: 4,
    url: "",
    img: "intak.png",
  },
  {
    name: "Soul",
    group: "P1Harmony",
    group_url: "/P1Harmony",
    id: 5,
    url: "",
    img: "soul.png",
  },
  {
    name: "Jongseob",
    group: "P1Harmony",
    group_url: "/P1Harmony",
    id: 6,
    url: "",
    img: "jongseob.png",
  },
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
    <React.Fragment>
      <div className="searchbar-container mt-5 d-flex justify-content-center align-items-center">
        <input
          className="searchbar"
          type="text"
          placeholder="Search by group or member"
          onChange={handleChange}
          value={searchInput}
        />
      </div>

      <div className="member_card_list d-flex justify-content-center align-items-center">
        <div className="row d-flex justify-content-center align-items-center">
          {filteredMemberAndGroupList.length > 0
            ? filteredMemberAndGroupList.map((member) => (
                <div key={member.id} className="col col-md-4 mb-5">
                  {member.name}
                  <img src={member.img} className="member_image row" />
                  <a href={member.group_url}>{member.group}</a>
                  <div className="row">
                    <a href={member.url}>Go to my PC List</a>
                  </div>
                </div>
              ))
            : searchInput.length > 0 && <h1>No results found! Try another search.</h1>}
        </div>
      </div>
    </React.Fragment>
  );
};
export default SearchBar;

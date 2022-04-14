import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const NavSearch = () => {
  return (
    <div>
      <div className="subnav">
        <div className="subnav__search">
          <input
            className="subnav__searchInput"
            type="text"
            placeholder="Search Members"
          />
          <SearchIcon className="subnav__searchIcon" />
        </div>
      </div>
    </div>
  );
};

export default NavSearch;
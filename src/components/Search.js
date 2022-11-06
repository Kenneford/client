import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <SearchIcon
        titleAccess="Search"
        sx={{
          color: "#fff",
          marginBottom: "-8px",
          marginRight: "10px",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

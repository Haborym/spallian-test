import React from "react";

interface SearchBarProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  search: () => void;
}

export const SearchBar = ({
  searchInput,
  setSearchInput,
  search,
}: SearchBarProps) => {
  return (
    <div style={{ display: "inherit", margin: "0.5rem" }}>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="header-list-item" onClick={search}>
        Find
      </button>
    </div>
  );
};

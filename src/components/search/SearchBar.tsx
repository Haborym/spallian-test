import React from "react";

interface SearchBarProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  search: () => void;
  isDisabled: boolean;
}

export const SearchBar = ({
  searchInput,
  setSearchInput,
  search,
  isDisabled,
}: SearchBarProps) => {
  return (
    <div style={{ display: "inherit", margin: "0.5rem" }}>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        disabled={isDisabled}
      />
      <button
        className="header-list-item"
        onClick={search}
        disabled={isDisabled}
      >
        Find
      </button>
    </div>
  );
};

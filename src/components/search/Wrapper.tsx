import React, { ReactNode, useState } from "react";
import { SearchBar } from "./SearchBar";

interface SearchWrapperProps {
  children?: ReactNode;
}

export const SearchWrapper = ({ children }: SearchWrapperProps) => {
  const [searchInput, setSearchInput] = useState("");

  const search = () => {
    alert(searchInput);
  };

  return (
    <>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        search={search}
      />
      {children}
    </>
  );
};

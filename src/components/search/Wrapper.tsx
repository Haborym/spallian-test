import React, { ReactNode, useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResult } from "./Search-result";

interface SearchWrapperProps {
  children?: ReactNode;
}

export const SearchWrapper = ({ children }: SearchWrapperProps) => {
  const [searchResult, setSearchResult] = useState();
  const [searchInput, setSearchInput] = useState("");

  const search = async () => {
    const response = await fetch(
      `http://gutendex.com/books?search=${searchInput}`
    );

    if (response) {
      setSearchResult(await response.json());
    }
  };

  return (
    <>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        search={search}
      />
      {searchResult && <SearchResult data={searchResult} />}
      {children}
    </>
  );
};

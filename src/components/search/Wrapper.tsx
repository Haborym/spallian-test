import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResult } from "./Search-result";
import { Books } from "../../utils/types";

export const SearchWrapper = () => {
  const [searchResult, setSearchResult] = useState<Books>();
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
      {searchResult && <SearchResult data={searchResult} input={searchInput} />}
    </>
  );
};

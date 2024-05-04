import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResult } from "./Search-result";
import { Books } from "../../utils/types";
import { BooksLoader } from "../loaders/Books-loader";

export const SearchWrapper = () => {
  const [searchResult, setSearchResult] = useState<Books>();
  const [searchInput, setSearchInput] = useState("");
  const [searchStatus, setSearchStatus] = useState(false);

  const search = async () => {
    setSearchStatus(true);
    const response = await fetch(
      `http://gutendex.com/books?search=${searchInput}`
    );

    if (response) {
      setSearchResult(await response.json());
      setSearchStatus(false);
    }
  };

  return (
    <>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        search={search}
      />
      {!searchStatus && searchResult && (
        <SearchResult data={searchResult} input={searchInput} />
      )}
      {searchStatus && <BooksLoader />}
    </>
  );
};

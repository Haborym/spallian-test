import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResult } from "./Search-result";
import { Books } from "../../utils/types";
import { BooksLoader } from "../loaders/Books-loader";

export const SearchWrapper = () => {
  const [searchResult, setSearchResult] = useState<Books>();
  const [searchInput, setSearchInput] = useState("");

  const [searchStatus, setSearchStatus] = useState(false);

  const [changePage, setChangePage] = useState("");

  const [formDisabled, setFormDisabled] = useState(false);

  const search = async () => {
    setFormDisabled(true);
    setSearchStatus(true);
    const response = await fetch(
      `http://gutendex.com/books?search=${searchInput}`
    );

    if (response) {
      setSearchResult(await response.json());
      setSearchStatus(false);
      setFormDisabled(false);
    }
  };

  const triggerPage = async () => {
    setFormDisabled(true);
    setSearchStatus(true);
    const response = await fetch(changePage);

    if (response) {
      setSearchResult(await response.json());
      setSearchStatus(false);
      setFormDisabled(false);
    }
  };

  return (
    <>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        search={search}
        isDisabled={formDisabled}
      />
      {!searchStatus && searchResult && (
        <SearchResult
          data={searchResult}
          input={searchInput}
          pageTrigger={setChangePage}
          trigger={triggerPage}
        />
      )}
      {searchStatus && <BooksLoader />}
    </>
  );
};

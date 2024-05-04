import React from "react";

interface SearchResultProps {
  data: Object;
}

export const SearchResult = ({ data }: SearchResultProps) => {
  return (
    <>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

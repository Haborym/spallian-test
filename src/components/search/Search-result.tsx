import React from "react";
import { Books } from "../../utils/types";
import { Pagination } from "./Pagination";
import { ResultItem } from "./Result-item";

interface SearchResultProps {
  data: Books;
}

export const SearchResult = ({ data }: SearchResultProps) => {
  return (
    <>
      <Pagination
        previous={data.previous}
        next={data.next}
        count={data.count}
      />
      <div className="book-grid">
        {data.results &&
          data.results.map((book) => {
            return <ResultItem key={book.id} book={book} />;
          })}
      </div>
      <Pagination
        previous={data.previous}
        next={data.next}
        count={data.count}
      />
    </>
  );
};

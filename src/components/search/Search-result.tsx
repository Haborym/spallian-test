import React from "react";
import { Books } from "../../utils/types";
import { Pagination } from "./Pagination";
import { ResultItem } from "./Result-item";
import { BooksError } from "../errors/Books-error";

interface SearchResultProps {
  data: Books;
  input: string;
}

export const SearchResult = ({ data, input }: SearchResultProps) => {
  return (
    <>
      {data.results.length === 0 && <BooksError input={input} />}
      {data.results.length !== 0 && (
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
      )}
    </>
  );
};

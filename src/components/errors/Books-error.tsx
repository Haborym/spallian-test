import React from "react";

interface BooksErrorProps {
  input: string;
}

export const BooksError = ({ input }: BooksErrorProps) => {
  return (
    <>
      <p>No books were found for the following search : </p>
      <p style={{ fontStyle: "italic" }}>{input}</p>
    </>
  );
};

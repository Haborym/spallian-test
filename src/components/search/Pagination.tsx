import React from "react";
import { Link } from "react-router-dom";

interface PaginationProps {
  previous: string | null;
  next: string | null;
  count: number;
}

export const Pagination = ({ previous, next, count }: PaginationProps) => {
  return (
    <section
      style={{
        display: "block ruby",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      {previous && (
        <Link className="margin-y-2" to={previous}>
          Previous
        </Link>
      )}
      <p className="margin-y-2">Found {count} results.</p>
      {next && (
        <Link className="margin-y-2" to={next ?? ""}>
          Next
        </Link>
      )}
    </section>
  );
};

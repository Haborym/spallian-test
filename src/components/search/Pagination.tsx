import React from "react";

interface PaginationProps {
  previous: string | null;
  next: string | null;
  count: number;
  pageTrigger: React.Dispatch<React.SetStateAction<string>>;
  trigger: () => Promise<void>;
}

export const Pagination = ({
  previous,
  next,
  count,
  pageTrigger,
  trigger,
}: PaginationProps) => {
  return (
    <section
      style={{
        display: "block ruby",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      {previous && (
        <button
          onClick={() => {
            pageTrigger(previous);
            trigger();
          }}
        >
          Previous
        </button>
      )}
      <p className="margin-y-2">Found {count} results.</p>
      {next && (
        <button
          onClick={() => {
            pageTrigger(next);
            trigger();
          }}
        >
          Next
        </button>
      )}
    </section>
  );
};

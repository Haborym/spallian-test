import React from "react";
import { Book, Person } from "../../utils/types";

import { Card } from "../card/Card";
import { CardHeader } from "../card/Card-header";
import { CardBody } from "../card/Card-body";
import { CardFooter } from "../card/Card-footer";

interface ResultItemProps {
  book: Book;
}

export const ResultItem = ({ book }: ResultItemProps) => {
  const getAuthors = (authors: Array<Person>) => {
    if (authors.length === 0) {
      return "Unknown";
    }
    return authors
      .map((author) => author.name.split(", ").reverse().join(" "))
      .join(", ");
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <p style={{ textOverflow: "..." }}>"{book.title}"</p>
        </CardHeader>
        <CardBody>
          <div style={{ minHeight: 300 }}>
            <img
              src={book.formats["image/jpeg"]}
              alt={"Picture of the book " + book.title}
              height={300}
            />
          </div>
        </CardBody>
        <CardFooter>
          <p>{getAuthors(book.authors)}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

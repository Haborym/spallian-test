export interface Books {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Book>
}

export interface Book {
  id: number;
  title: string;
  authors: Array<Person>;
  subjects: string;
  translators: Array<Person>;
  bookshelves: Array<string>;
  languages: Array<string>;
  copyright: boolean | null;
  media_type: string;
  formats: Format;
  download_count: number;
}

export interface Person {
  birth_year: number | null;
  death_year: number | null;
  name: string;
}

export interface Format {
  "text/html": string;
  "application/epub+zip": string;
  "application/x-mobipocket-ebook": string;
  "application/rdf+xml": string;
  "image/jpeg": string;
  "application/octet-stream": string;
  "text/plain; charset=us-ascii": string;
}
export interface Book {
  isbn: string;
  title: string;
  description: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isBook(obj: any): obj is Book {
  return "isbn" in obj && "title" in obj && "description" in obj;
}

export interface Book {
  isbn: string;
  title: string;
  description: string;
}

export interface PagedResults<T> {
  items: T[];
  lastEvaluatedKey?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isBook(obj: any): obj is Book {
  return "isbn" in obj && "title" in obj && "description" in obj;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPagedResults<T>(obj: any): obj is PagedResults<T> {
  if (!("items" in obj) && !("lastEvaluatedKey" in obj)) return false;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return Array.isArray(obj.items);
}

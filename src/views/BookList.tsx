import { useEffect, useState } from "react";
import { httpClient } from "../services/httpClient";
import { Book, isBook, isPagedResults } from "../types";
import { useDispatch } from "react-redux";
import { BookItem } from "../components/BookItem";
import { setCurrentBook } from "../data/bookStoreSlice";
import { useNavigate } from "react-router-dom";
import "../assets/styles/bookList.css";
import "../assets/styles/common.css";

export function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchBooks() {
      const response = await httpClient.get("/books");
      if (response.status != 200) {
        console.error("Unexpected status code", response.status);
        return;
      }

      const pagedResults: unknown = response.data;
      if (!isPagedResults<Book>(pagedResults)) {
        console.error("Unexpected response", response.data);
        return;
      }

      const items = pagedResults.items;
      if (items.every(isBook)) {
        setBooks(items);
      } else {
        console.error("Unexpected response", items);
      }
    }

    fetchBooks().catch(console.error);
  }, []);

  function onBookItemClick(book: Book) {
    dispatch(setCurrentBook(book));
    navigate(`/book/edit/${book.isbn}`);
  }

  return (
    <div className="">
      <ul className="book_list">
        {books.map((book) => (
          <BookItem
            book={book}
            key={book.isbn}
            onBookItemClick={onBookItemClick}
          />
        ))}
      </ul>
    </div>
  );
}

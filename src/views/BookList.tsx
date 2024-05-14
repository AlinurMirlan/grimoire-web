import { useEffect, useState } from "react";
import { httpClient } from "../services/httpClient";
import { Book, isBook } from "../types";
import { useDispatch } from "react-redux";
import { BookItem } from "../components/BookItem";
import { setCurrentBook } from "../data/bookStoreSlice";
import { useNavigate } from "react-router-dom";
import "./bookList.css";

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

      if (Array.isArray(response.data) && response.data.every(isBook)) {
        setBooks(response.data);
      } else {
        console.error("Unexpected response", response.data);
      }
    }

    fetchBooks().catch(console.error);
  }, []);

  function onBookItemClick(book: Book) {
    dispatch(setCurrentBook(book));
    navigate(`/book/edit/${book.isbn}`);
  }

  return (
    <div className="div-list">
      <h1>Book List</h1>
      <ul className="ul-list">
        {books.map((book) => (
          <BookItem
            className="ul-list-item"
            book={book}
            key={book.isbn}
            onBookItemClick={onBookItemClick}
          />
        ))}
      </ul>
    </div>
  );
}

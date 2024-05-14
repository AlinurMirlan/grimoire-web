import { useForm } from "react-hook-form";
import { InputForm } from "../components/InputForm";
import { Book, isBook } from "../types";
import { httpClient } from "../services/httpClient";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../data/store";
import "../components/bookAdd.css";

export function BookEdit() {
  const { isbn: bookIsbnParam } = useParams();
  const navigate = useNavigate();
  const currentBook = useSelector(
    (state: RootState) => state.bookStore.currentBook
  );

  const [book, setBook] = useState<Book>(
    currentBook ?? {
      isbn: "",
      title: "",
      description: "",
    }
  );

  useEffect(() => {
    if (book.isbn === bookIsbnParam) {
      return;
    }

    async function fetchBook() {
      const response = await httpClient.get(`/book/${bookIsbnParam}`);
      if (response.status != 200) {
        console.error("Unexpected status code", response.status);
        return;
      }

      if (!isBook(response.data)) {
        console.error("Unexpected response", response.data);
        return;
      }

      setBook(response.data);
    }

    fetchBook().catch(console.error);
  }, [bookIsbnParam, book.isbn]);

  const [bookEdited, setBookEdited] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Book>();

  async function onEdit(editedBook: Book) {
    const response = await httpClient.post("/save/book", editedBook);
    if (response.status != 201) {
      console.error("Unexpected status code", response.status);
      return;
    }

    setBookEdited(true);
  }

  async function onDelete() {
    const response = await httpClient.delete(`/delete/book/${book.isbn}`);
    if (response.status != 204) {
      console.error("Unexpected status code", response.status);
      return;
    }

    navigate("/");
  }

  return (
    <div>
      <form noValidate onSubmit={handleSubmit(onEdit)}>
        <div>
          <InputForm
            type="text"
            id="isbn"
            label="ISBN"
            error={errors.isbn}
            defaultValue={book.isbn}
            disabled
          />
        </div>
        <div>
          <InputForm
            type="text"
            id="title"
            label="Title"
            error={errors.title}
            defaultValue={book.title}
            {...register("title", { required: "Title is required" })}
          />
        </div>
        <div>
          <label htmlFor="description" className="label-add">
            Description
          </label>
          <textarea
            id="description"
            className="text-area-add"
            defaultValue={book.description}
            {...register("description", {
              required: "Description is required",
            })}
          />
        </div>
        <div>
          <button className="button" type="submit">
            Edit
          </button>
          <button className="button" onClick={onDelete} type="button">
            Delete
          </button>
        </div>
      </form>
      {bookEdited && <p>Book edited</p>}
    </div>
  );
}

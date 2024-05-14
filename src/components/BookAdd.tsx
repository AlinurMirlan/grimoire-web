import { useForm } from "react-hook-form";
import { InputForm } from "./InputForm";
import { Book } from "../types";
import { httpClient } from "../services/httpClient";
import { useState } from "react";
import "./bookAdd.css";
import "../assets/common.css";

export function BookAdd() {
  const [bookSaved, setBookSaved] = useState<boolean>(false);
  const [bookExists, setBookExists] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Book>();

  async function onSubmit(book: Book) {
    let response = await httpClient.get(`/books/${book.isbn}`);
    if (response.status == 200) {
      setBookExists(true);
      setBookSaved(false);
      return;
    }

    response = await httpClient.post("/books", book);
    if (response.status != 201) {
      console.error("Unexpected status code", response.status);
      return;
    }

    setBookExists(false);
    setBookSaved(true);
  }

  return (
    <div>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <InputForm
            type="text"
            id="isbn"
            label="ISBN"
            error={errors.isbn}
            {...register("isbn", {
              required: "ISBN is required",
              pattern: { value: /^\d{13}$/, message: "Invalid ISBN" },
            })}
          />
        </div>
        <div>
          <InputForm
            type="text"
            id="title"
            label="Title"
            error={errors.title}
            {...register("title", { required: "Title is required" })}
          />
        </div>
        <div>
          <label htmlFor="description" className="label-add">
            Description
          </label>
          <textarea
            className="text-area-add"
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
          />
        </div>
        <button className="button" type="submit">
          Add
        </button>
      </form>
      {bookSaved && <p>Book added</p>}
      {bookExists && <p>Book already exists</p>}
    </div>
  );
}

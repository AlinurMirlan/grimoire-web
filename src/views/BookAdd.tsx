import { useForm } from "react-hook-form";
import { InputForm } from "../components/InputForm";
import { Book } from "../types";
import { httpClient } from "../services/httpClient";
import { useState } from "react";
import "../assets/styles/common.css";
import "../assets/styles/inputForm.css";
import { ButtonIcon } from "../components/ButtonIcon";
import { IconAdd } from "../assets/icons/IconAdd";

export function BookAdd() {
  const [bookSaved, setBookSaved] = useState<boolean>(false);
  const [bookExists, setBookExists] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Book>();

  async function onSubmit(book: Book) {
    const response = await httpClient.post("/books", book);
    if (response.status == 409) {
      setBookExists(true);
      setBookSaved(false);
      return;
    }

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
        <div className="">
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
          <label htmlFor="description" className="input_form_label">
            Description
          </label>
          <textarea
            className="input_form_input"
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
          />
        </div>
        <ButtonIcon
          Icon={IconAdd}
          title="Add"
          className="common_button_success"
          type="submit"
        />
      </form>
      {bookSaved && <p>Book added</p>}
      {bookExists && <p>Book already exists</p>}
    </div>
  );
}

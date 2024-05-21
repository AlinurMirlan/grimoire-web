import { useForm } from "react-hook-form";
import { InputForm } from "../components/InputForm";
import { Book, isBook } from "../types";
import { httpClient } from "../services/httpClient";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IconEdit } from "../assets/icons/IconEdit";
import { ButtonIcon } from "../components/ButtonIcon";
import { IconDelete } from "../assets/icons/IconDelete";
import "../assets/styles/inputForm.css";
import "../assets/styles/common.css";

export function BookEdit() {
  const { isbn: bookIsbnParam } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState<Book>({
    isbn: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    async function fetchBook() {
      const response = await httpClient.get(`/books/${bookIsbnParam}`);
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
  }, [bookIsbnParam]);

  const [bookEdited, setBookEdited] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Book>();

  async function onEdit(editedBook: Book) {
    editedBook.isbn = book.isbn;
    const response = await httpClient.put(`/books/${book.isbn}`, editedBook);
    if (response.status != 200) {
      console.error("Unexpected status code", response.status);
      return;
    }

    setBookEdited(true);
  }

  async function onDelete() {
    const response = await httpClient.delete(`/books/${book.isbn}`);
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
            className="input_form_input_disabled"
            error={errors.isbn}
            defaultValue={book.isbn}
            disabled
            {...register("isbn")}
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
          <label htmlFor="description" className="input_form_label">
            Description
          </label>
          <textarea
            id="description"
            className="input_form_input common_text_area"
            defaultValue={book.description}
            {...register("description", {
              required: "Description is required",
            })}
          />
        </div>
        <div className="common_button_group">
          <ButtonIcon
            Icon={IconEdit}
            title="Edit"
            className="common_button"
            type="submit"
          />
          <ButtonIcon
            Icon={IconDelete}
            title="Delete"
            className="common_button_danger"
            type="button"
            onClick={onDelete}
          />
        </div>
      </form>
      {bookEdited && (
        <p className="common_message_success">Book has been edited</p>
      )}
    </div>
  );
}

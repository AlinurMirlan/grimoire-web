import { ComponentPropsWithRef } from "react";
import { IconEdit } from "../assets/icons/IconEdit";
import { Book } from "../types";
import "../assets/styles/bookItem.css";

type Props = {
  book: Book;
  onBookItemClick: (book: Book) => void;
} & ComponentPropsWithRef<"button">;

export function BookItem({ book, onBookItemClick, ...buttonProps }: Props) {
  return (
    <button
      className="book_item"
      {...buttonProps}
      onClick={() => onBookItemClick(book)}
    >
      <div className="book_item_left">
        <div className="">{book.title}</div>
        <div className="">{book.description}</div>
      </div>
      <div className="book_item_filler_in_between"></div>
      <div className="">
        <IconEdit />
      </div>
    </button>
  );
}

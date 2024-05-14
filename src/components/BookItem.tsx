import { ComponentPropsWithRef } from "react";
import { IconEdit } from "../assets/IconEdit";
import { Book } from "../types";
import "./bookItem.css";

type Props = {
  book: Book;
  onBookItemClick: (book: Book) => void;
} & ComponentPropsWithRef<"button">;

export function BookItem({ book, onBookItemClick, ...buttonProps }: Props) {
  return (
    <button
      className="ul-list-item"
      {...buttonProps}
      onClick={() => onBookItemClick(book)}
    >
      <div className="ul-item-left-side">
        <div className="">{book.title}</div>
        <div className="">{book.description}</div>
      </div>
      <div className="filler"></div>
      <div className="">
        <IconEdit />
      </div>
    </button>
  );
}

import { createBrowserRouter } from "react-router-dom";
import { BookList } from "./views/BookList";
import { BookAdd } from "./views/BookAdd";
import { BookEdit } from "./views/BookEdit";
import { Layout } from "./views/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <BookList />,
      },
      {
        path: "/book/add",
        element: <BookAdd />,
      },
      {
        path: "/book/edit/:isbn",
        element: <BookEdit />,
      },
    ],
  },
]);

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { store } from "./data/store.ts";
import { Provider } from "react-redux";

const container = document.getElementById("root");
if (container == null) {
  throw new Error(
    "No root element found. Please ensure you have a div with id 'root' in your index.html file."
  );
}

ReactDOM.createRoot(container).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

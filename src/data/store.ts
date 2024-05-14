import { configureStore } from "@reduxjs/toolkit";
import bookStoreReducer from "./bookStoreSlice";

export const store = configureStore({
  reducer: {
    bookStore: bookStoreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

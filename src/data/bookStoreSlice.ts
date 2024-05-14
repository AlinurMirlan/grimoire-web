import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Book } from "../types";

export const bookStoreSlice = createSlice({
  name: "bookStore",
  initialState: {
    currentBook: null as Book | null,
  },
  reducers: {
    setCurrentBook: (state, action: PayloadAction<Book>) => {
      state.currentBook = action.payload;
    },
  },
});

export const { setCurrentBook } = bookStoreSlice.actions;

export default bookStoreSlice.reducer;

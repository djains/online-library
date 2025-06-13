import { createSlice } from "@reduxjs/toolkit";
import { books as dummyBooks } from "../data/dummyBooks";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: dummyBooks
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;

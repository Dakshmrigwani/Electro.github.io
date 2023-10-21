import { configureStore } from "@reduxjs/toolkit";
import CommentSlice from "../Slices/CommentSlice";

export const store = configureStore({
  reducer: {
    comments: CommentSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import CommentsReducer from "../Slices/CommentSlice";

export const store = configureStore({
  reducer: {
    comments: CommentsReducer,
  },
});

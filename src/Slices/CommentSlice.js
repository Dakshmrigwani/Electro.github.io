import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  commentsData: [],
};



const CommentSlice = createSlice({
  name: `comments`,
  initialState,
  reducers: {
    AddComment: (state, action) => {
      const { name, content } = action.payload;
      const uniqueId = uuidv4(); // Generate a unique ID for the comment
      state.commentsData.push({ id: uniqueId, name, content });
    },
    editComment: (state, action) => {
      const { id, name, content } = action.payload;
      const comment = state.commentsData.find((comment) => comment.id === id);
      if (comment) {
        comment.name = name;
        comment.content = content;
      }
    },
    DeleteComment: (state, action) => {
      state.commentsData = state.commentsData.filter(
        (comment) => comment.id !== action.payload
      );
    },
  },
});


export const { AddComment, DeleteComment , editComment } = CommentSlice.actions;

export default CommentSlice.reducer;

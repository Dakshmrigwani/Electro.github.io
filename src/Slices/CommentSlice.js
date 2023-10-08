import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

const CommentSlice = createSlice({
  name: `comments`,
  initialState,
  reducers: {
    AddComment: (state, action) => {
      state.comments.push(action.payload);
    },
    editComment: (state, action) => {
      const { id, content } = action.payload;
      const commentIndex = state.comments.findIndex((comment) => comment.id === id);
      if (commentIndex !== -1) {
        state.comments[commentIndex].content = content;
      }
    },
    DeleteComment: (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
  },
});


export const { AddComment, DeleteComment , editComment } = CommentSlice.actions;

export default CommentSlice.reducer;

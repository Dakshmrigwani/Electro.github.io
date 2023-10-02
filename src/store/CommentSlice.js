
import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    addComment: (state, action) => {
      state.push(action.payload);
    },
    updateComment: (state, action) => {
      const { id, text } = action.payload;
      const comment = state.find((comment) => comment.id === id);
      if (comment) {
        comment.text = text;
      }
    },
    deleteComment: (state, action) => {
      const idToDelete = action.payload;
      return state.filter((comment) => comment.id !== idToDelete);
    },
  },
});

export const { addComment, updateComment, deleteComment } = commentsSlice.actions;
export default commentsSlice.reducer;

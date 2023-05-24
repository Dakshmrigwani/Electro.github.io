import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      state.push(action.payload); // Add item to the cart state
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;

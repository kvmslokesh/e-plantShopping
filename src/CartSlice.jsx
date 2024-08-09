import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize with an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      // Check if the item is already in the cart
      const existingItem = state.items.find((i) => i.name === item.name);
      if (existingItem) {
        // Optionally handle the case where the item already exists
        // e.g., increment quantity or update item
      } else {
        state.items.push(item); // Add the new item to the cart
      }
    },
    removeItem: (state, action) => {
      const itemName = action.payload.name;
      state.items = state.items.filter((item) => item.name !== itemName);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((item) => item.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

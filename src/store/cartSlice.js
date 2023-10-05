const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    add(state, action) {
      // Check if the product is already in the cart
      const existingProduct = state.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1; // Increment the quantity
      } else {
        state.push({ ...action.payload, quantity: 1 }); // Add with quantity 1 if not in the cart
      }
    },

    remove(state, action) {
      // Remove the product or decrement its quantity if more than 1
      const existingProduct = state.find(item => item.id === action.payload);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1; // Decrement the quantity
        } else {
          // Remove the product from the cart if quantity is 1
          return state.filter(item => item.id !== action.payload);
        }
      }
    },

    removeall(state, action) {
      return state.filter(item => item.id !== action.payload)
  },

    clear(state) {
      state.length = 0; // Clear the cart by setting its length to 0
    },

  },
});

export const { add, remove, removeall, clear } = cartSlice.actions;
export default cartSlice.reducer;

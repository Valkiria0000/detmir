import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    currentProducts: null,
  },
  reducers: {
    setCurrentProducts: (state, action) => {
      state.currentProducts = action.payload;
    },
  },
});

export const { setCurrentProducts } = productsSlice.actions;
export default productsSlice.reducer;

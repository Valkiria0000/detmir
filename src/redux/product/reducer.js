import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "../services/productsService";

export const getProduct = createAsyncThunk(
  "GET_PRODUCT",
  async (id, thunkAPI) => {
    try {
      return await productsService.getProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
    isError: false,
    isLoading: false,
    message: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.product = null;
    });
  },
});

export default productSlice.reducer;

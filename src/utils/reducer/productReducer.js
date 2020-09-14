import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  products: [],
  items: [],
  size: null,
  sort: null,
};
const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProducts(_, __) {},
    getListProducts(state, action) {
      console.log(action);
      state.products = action.payload;
      state.items = action.payload;
    },
    setListProduct(state, action) {
      state.products = action.payload;
    },
    filterbysize(state, action) {
      state.size = action.payload;
    },
    filterbysort(state, action) {
      state.sort = action.payload;
    },
  },
});
export const { name: sliceKey, actions, reducer } = productReducer;

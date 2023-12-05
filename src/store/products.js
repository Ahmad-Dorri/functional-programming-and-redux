import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

let lastId = 0;
const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (products, action) => {
      products.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});

export default slice.reducer;
export const { addProduct } = slice.actions;

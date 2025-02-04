import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductsTypes } from "../../types/products.type";

const initialState: Omit<
  ProductsTypes,
  "name" | "imgProduct" | "desc" | "price"
>[] = [];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductGetPrice: (
      state,
      action: PayloadAction<
        Omit<ProductsTypes, "name" | "imgProduct" | "desc" | "price">[]
      >
    ) => {
      const productItem = action.payload;

      productItem.forEach((product) => {
        // NOTE -หา Product ที่ ซ้ำแล้ว
        const existProduct = state.findIndex(
          (item) => item._id === product._id
        );

        if (existProduct !== -1) {
          state[existProduct].quantity += 1;
        } else {
          state.push(...action.payload);
        }
      });
    },
  },
});

export const { setProductGetPrice } = productSlice.actions;

export default productSlice.reducer;

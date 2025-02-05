import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductsTypes } from "../../types/products.type";

const initialState: ProductsTypes[] = [];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductGetPrice: (state, action: PayloadAction<ProductsTypes[]>) => {
      const productItem = action.payload;

      productItem.forEach((product) => {
        // NOTE -หา Product ที่ ซ้ำแล้ว
        const existProduct = state.findIndex(
          (item) => item._id === product._id
        );

        if (existProduct !== -1) {
          state[existProduct].quantity += product.quantity;
        } else {
          state.push(...action.payload);
        }
      });
    },
    deleteProduct: (state, actions: PayloadAction<string>) => {
      return state.filter((item) => item._id !== actions.payload);
    },

    clearCart: () => initialState,
  },
});

export const { setProductGetPrice, deleteProduct, clearCart } =
  productSlice.actions;

export default productSlice.reducer;

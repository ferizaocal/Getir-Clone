import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item: CartItem) => item.product.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }

      state.totalPrice += action.payload.fiyat;
    },
    removeFromCart: (state: CartState, action: PayloadAction<string>) => {
      const existingItem = state.items.find(
        (item: CartItem) => item.product.id === action.payload
      );

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            (item: CartItem) => item.product.id !== action.payload
          );
        } else {
          existingItem.quantity -= 1;
        }
        state.totalPrice -= existingItem.product.fiyat;
      }
    },
    clearCart: (state: CartState) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

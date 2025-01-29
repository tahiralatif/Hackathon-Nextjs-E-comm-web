// src/app/redux/features/cart-slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Place this in a shared file like `types.ts` or `cart-slice.ts`
export interface CartItem {
  stock: number;
  id: number;
  name: string;
  price: number;
  quantity: number;
  size?: string; // For products with sizes
  description?: string;
  imagePath?: string;
  sizes?: string[];
  isFavorite?: boolean;
}


const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<CartItem[]>) => {
      return action.payload;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size // Check for same product and size
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity; // Increment quantity if the product with the same size already exists
      } else {
        state.push(action.payload); // Add new product if size doesn't match
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { updateCart, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

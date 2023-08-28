"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
      console.log(state.items);
    },

    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item._id === action.payload._id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("cant remove Product is not in Basket");
      }

      state.items = newBasket;
    },

    removeToBasket: (state, action) => {
      const newBasket = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, removeToBasket } =
  basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item._id === id);
export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.prix), 0);

export default basketSlice.reducer;

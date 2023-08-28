"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/BaskeSlice";

const rootReducer = combineReducers({
  basket: basketReducer,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

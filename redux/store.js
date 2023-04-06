import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import basketReducer  from './features/BaskeSlice';


const makeStore = () =>
  configureStore({
    reducer: {basket:basketReducer},
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
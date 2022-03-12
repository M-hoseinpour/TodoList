import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Redux/Todo/TodoSlice';

export const store = configureStore({
  reducer: {
    todo: counterReducer,
  },
});

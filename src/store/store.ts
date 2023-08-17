import { configureStore } from '@reduxjs/toolkit';
import { tableStockSlice } from '../modules';
import themeSlice from '../shared/slice/themeSlice';

export const store = configureStore({
  reducer: {
    tableStock: tableStockSlice,
    theme: themeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

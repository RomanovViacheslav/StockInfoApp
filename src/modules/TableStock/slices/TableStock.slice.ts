import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchSectors, fetchStockDataBySymbol, fetchStocksBySector, fetchTopStocks } from './TableStock.thunks';
import { TableStockState } from '../TableStock.types';

const initialState: TableStockState = {
  stocks: [],
  symbols: [],
  sectors: [],
  filtersLoading: false,
  loading: false,
  error: null,
  currentPage: 1,
  totalCount: 0,
};

const tableStockSlice = createSlice({
  name: 'stocksTable',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSectors.pending, (state) => {
        state.filtersLoading = true;
      })
      .addCase(fetchSectors.fulfilled, (state, action) => {
        state.sectors = action.payload;
        state.filtersLoading = false;
      })
      .addCase(fetchStocksBySector.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStocksBySector.fulfilled, (state, action) => {
        state.stocks = action.payload;
        state.totalCount = action.payload.length;
        state.currentPage = 1;
        state.loading = false;
      })
      .addCase(fetchStocksBySector.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка';
      })
      .addCase(fetchStockDataBySymbol.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStockDataBySymbol.fulfilled, (state, action) => {
        state.stocks = [action.payload];
        state.totalCount = 1;
        state.currentPage = 1;
        state.loading = false;
      })
      .addCase(fetchStockDataBySymbol.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка';
      })
      .addCase(fetchTopStocks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopStocks.fulfilled, (state, action) => {
        state.stocks = action.payload;
        state.totalCount = action.payload.length;
        state.currentPage = 1;
        state.loading = false;
      })
      .addCase(fetchTopStocks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка';
      });
  },
});

export const { setCurrentPage } = tableStockSlice.actions;
export default tableStockSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { resolve } from 'path';
import { RootState } from '../../../store';

import { mapOneStock, mapSector, mapStocks } from '../helpers';
import { stocksAgentInstance } from '../../../http';

export const fetchStockDataBySymbol = createAsyncThunk(
  'stocks/fetchStockDataBySymbol',
  async (symbol: string) => {
    try {
      const res = await stocksAgentInstance.getStockDataBySymbol(symbol);
      return mapOneStock(res);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      throw new Error('Ошибка');
    }
  },
);

export const fetchSectors = createAsyncThunk('stocks/fetchSectors', async () => {
  try {
    const res = await stocksAgentInstance.getAllStockSectors();
    return mapSector(res);
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error('Ошибка');
  }
});

export const fetchStocksBySector = createAsyncThunk(
  'stocks/fetchStocksBySector',
  async (sector: string) => {
    try {
      const res = await stocksAgentInstance.getStocksBySector(sector);
      return mapStocks(res);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      throw new Error('Ошибка');
    }
  },
);

export const fetchTopStocks = createAsyncThunk('stocks/fetchTopStocks', async () => {
  try {
    const res = await stocksAgentInstance.getTopStocks();
    console.log(res);

    return mapStocks(res);
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error('Ошибка');
  }
});

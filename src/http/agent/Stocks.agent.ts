import { StockDataResponseSuccess, StockSectorsResponseSuccess } from '../model/Stocks.models';
import { BasicAgent } from './Basic.agent';

export class StocksAgent extends BasicAgent {
  private _token: string = 'pk_e940191c5d0e4ab388864000372a7e63';

  constructor() {
    super('https://cloud.iexapis.com/stable', {});
  }

  async getAllStockSectors(): Promise<StockSectorsResponseSuccess[]> {
    try {
      const { data } = await this._http.get(`/ref-data/sectors?token=${this._token}`);
      const symbols = data;
      return symbols;
    } catch (error: unknown) {
      throw new Error((error as Error).message);
    }
  }

  async getStocksBySector(sector: string): Promise<StockDataResponseSuccess[]> {
    try {
      const { data } = await this._http.get(
        `/stock/market/collection/sector?collectionName=${sector}&token=${this._token}`,
      );
      return data;
    } catch (error: unknown) {
      throw new Error((error as Error).message);
    }
  }

  async getStockDataBySymbol(symbol: string): Promise<StockDataResponseSuccess> {
    try {
      const { data } = await this._http.get(`/stock/${symbol}/quote?token=${this._token}`);
      return data;
    } catch (error: unknown) {
      throw new Error((error as Error).message);
    }
  }

  async getTopStocks(): Promise<StockDataResponseSuccess[]> {
    try {
      const { data } = await this._http.get(`/stock/market/list/mostactive?token=${this._token}`);
      return data;
    } catch (error: unknown) {
      throw new Error((error as Error).message);
    }
  }
}

export const stocksAgentInstance = new StocksAgent();

export interface StockSymbolResponseSuccess {
  symbol: string;
  exchange: string;
  exchangeSuffix: string;
  exchangeName: string;
  name: string;
  type: string;
  iexId: string;
  region: string;
  currency: string;
  figi: string;
  cik: string;
  lei: string;
  securityName: string;
  securityType: string;
  sector: string;
}

export interface StockSectorsResponseSuccess {
  name: string;
}

export interface StockDataResponseSuccess {
  symbol: string;
  companyName: string;
  latestPrice: number;
  change: number;
  changePercent: number;
  volume: number;
}

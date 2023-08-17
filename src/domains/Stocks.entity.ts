export interface SymbolsEntity {
  id: string;
  symbol: string;
  name: string;
}

export interface SectorEntity {
  id: string;
  name: string;
}

export interface StocksEntity {
  symbol: string;
  companyName: string;
  currentPrice: string;
  changePrice: string;
  percentageChangePrice: string;
  tradingVolume: string;
  lastTradeTime: string;
}

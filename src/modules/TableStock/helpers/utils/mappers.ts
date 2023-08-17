import { SectorEntity, StocksEntity, SymbolsEntity } from '../../../../domains';
import {
  StockDataResponseSuccess,
  StockSectorsResponseSuccess,
} from '../../../../http';

const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();
  return `${formattedDate} ${formattedTime}`;
};

export const mapSector = (sectors: StockSectorsResponseSuccess[]): SectorEntity[] =>
  sectors.map((sector) => ({
    id: sector.name,
    name: sector.name,
  }));

export const mapStocks = (stocksData: StockDataResponseSuccess[]): StocksEntity[] =>
  stocksData.map((stock) => ({
    symbol: stock.symbol || '--',
    companyName: stock.companyName || '--',
    currentPrice: stock.latestPrice ? String(stock.latestPrice) : '--',
    changePrice: stock.change ? String(stock.change) : '--',
    percentageChangePrice: stock.changePercent
      ? `${(stock.changePercent * 100).toFixed(2)}%`
      : '--',
    tradingVolume: stock.volume ? String(stock.volume) : '--',
    lastTradeTime: stock.latestTime ? formatDate(stock.latestTime) : '--',
  }));

export const mapOneStock = (stock: StockDataResponseSuccess): StocksEntity => ({
  symbol: stock.symbol || '--',
  companyName: stock.companyName || '--',
  currentPrice: stock.latestPrice ? String(stock.latestPrice) : '--',
  changePrice: stock.change ? String(stock.change) : '--',
  percentageChangePrice: stock.changePercent ? `${(stock.changePercent * 100).toFixed(2)}%` : '--',
  tradingVolume: stock.volume ? String(stock.volume) : '--',
  lastTradeTime: stock.latestTime ? formatDate(stock.latestTime) : '--',
});

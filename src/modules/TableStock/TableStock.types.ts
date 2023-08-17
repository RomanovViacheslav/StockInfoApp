import { SectorEntity, StocksEntity, SymbolsEntity } from '../../domains';
import { ThemeType } from '../../theme';

export interface TableStockState {
  filtersLoading: boolean;
  stocks: StocksEntity[];
  sectors:SectorEntity[],
  symbols: SymbolsEntity[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalCount: number;
}

export interface StyledTableStockProps {
  theme?: ThemeType;
}

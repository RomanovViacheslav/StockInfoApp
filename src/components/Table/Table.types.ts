import { TableProps as TablePropsMUI } from '@mui/material';
import { ThemeType } from '../../theme';
import { StocksEntity } from '../../domains';

export interface StyledTableProps {
  theme?: ThemeType;
}

export interface TableProps extends TablePropsMUI {
    columnName: string[],
    data: StocksEntity[],
}

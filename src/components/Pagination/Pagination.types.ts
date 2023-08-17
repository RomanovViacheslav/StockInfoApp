import { PaginationProps as PaginationMuiProps } from '@mui/material';
import { ThemeType } from '../../theme';

export interface StyledPaginationProps {
  theme?: ThemeType;
}

export interface PaginationProps extends PaginationMuiProps {}

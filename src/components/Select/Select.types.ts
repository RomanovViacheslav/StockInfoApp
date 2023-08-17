import { SelectProps as SelectPropsMUI } from '@mui/material';
import { ThemeType } from '../../theme';
import { SectorEntity, SymbolsEntity } from '../../domains';

export interface StyledSelectProps {
  theme?: ThemeType;
  open?: boolean;
}

export interface SelectProps extends SelectPropsMUI {
  data?: SectorEntity[];
  onClear?: () => void;
  onInputChange?: (value: string[]) => void;
  value: string | string[];
}

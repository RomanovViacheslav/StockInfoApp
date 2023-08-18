import { ButtonProps as ButtonPropsMui } from '@mui/material';
import { ThemeType } from '../../theme';

export interface StyledButtonProps {
  theme?: ThemeType;
}

export interface ButtonProps extends ButtonPropsMui {
  name: string;
}

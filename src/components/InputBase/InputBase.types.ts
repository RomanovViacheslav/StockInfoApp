import { InputBaseProps as InputProps } from '@mui/material';
import { ThemeType } from '../../theme';

export interface StyledInputProps {
  theme?: ThemeType;
}

export interface InputBaseProps extends InputProps {}

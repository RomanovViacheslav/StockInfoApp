import { InputBaseProps } from '@mui/material';
import { ThemeType } from '../../theme';

export interface StyledTextFieldProps {
  theme?: ThemeType;
}

export interface TextFieldProps extends InputBaseProps {
  onIconClick: () => void;
}

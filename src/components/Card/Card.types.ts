import { CardProps as CardMuiProps } from '@mui/material';
import { ThemeType } from '../../theme';

export interface StyledCardProps {
  theme?: ThemeType;
}

export interface CardProps extends CardMuiProps {
  image: string;
  name: string;
  location: string;
  author: string;
  created: string;
}

import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { StyledButtonProps } from './Button.types';

export const StyledButton = styled(Button)<StyledButtonProps>(({ theme }) => ({
  width: '100%',
  color: theme.palette.primary.dark,
  borderColor: theme.palette.text.disabled,
  borderRadius: '8px',
  '&:hover': {
    borderColor: theme.palette.primary.dark,
  },
}));

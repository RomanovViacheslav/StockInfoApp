import styled from '@emotion/styled';
import { FormControl } from '@mui/material';
import { StyledTextFieldProps } from './TextFieldComponent.types';

export const StyledFormControl = styled(FormControl)<StyledTextFieldProps>(({ theme }) => ({
  width: '100%',
  '& .MuiInputBase-input': {
    minHeight: 'auto',
    padding: '0 15px',
  },
  '& svg': {
    cursor: 'pointer',
    color: theme.palette.secondary.dark,
  },
  ' & svg:hover': {
    color: theme.palette.primary.dark,
  },
}));

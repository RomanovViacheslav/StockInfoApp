import React, { memo } from 'react';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '../InputBase';
import { StyledFormControl } from './TextFieldComponent.styled';
import { TextFieldProps } from './TextFieldComponent.types';

export const TextFieldComponent = memo(({ onIconClick, ...props }: TextFieldProps) => (
  <StyledFormControl variant="standard">
    <InputBase
      inputProps={{ 'aria-label': 'Name Company' }}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon onClick={onIconClick} />
        </InputAdornment>
      }
      {...props}
    />
  </StyledFormControl>
));

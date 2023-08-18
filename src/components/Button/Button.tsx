import React, { memo } from 'react';
import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';

export const Button = memo(({ name, ...props }: ButtonProps) => (
  <StyledButton {...props} variant="outlined">
    {name}
  </StyledButton>
));

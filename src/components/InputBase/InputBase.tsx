import React from 'react';
import { StyledInput } from './InputBase.styled';
import { InputBaseProps } from './InputBase.types';

export const InputBase = ({ ...props }: InputBaseProps) => (
  <StyledInput {...props} />
);

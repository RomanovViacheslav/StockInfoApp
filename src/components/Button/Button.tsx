import React from 'react';
import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';

export const Button = ({ name, ...props }: ButtonProps) => <StyledButton {...props} variant="outlined">{name}</StyledButton>;

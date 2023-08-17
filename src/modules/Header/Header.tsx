import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import React from 'react';
import { LogoIcon, ToggleIcon } from '../../ui/icons';
import { StyledIconButton } from './Header.styled';
import { toggleThemePreference, useAppDispatch } from '../../shared';

export const Header = () => {
  const dispatch = useAppDispatch();
  const handleThemeToggle = () => {
    dispatch(toggleThemePreference());
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      component="header"
      mt="35px"
    >
      <LogoIcon />
      <StyledIconButton onClick={handleThemeToggle} color="primary" aria-label="toggle theme">
        <ToggleIcon />
      </StyledIconButton>
    </Box>
  );
};

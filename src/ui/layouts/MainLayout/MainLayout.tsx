import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { StyledBox } from './MainLayout.styled';

export const MainLayout = () => (
  <StyledBox component="main">
    <Outlet />
  </StyledBox>
);

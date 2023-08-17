import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { StyledBoxProps } from './MainLayout.types';

export const StyledBox = styled(Box)<StyledBoxProps>(({ theme }) => ({
  height: '100vh',
  margin: '0 auto',
  // maxWidth: '1366px',
  // padding: '0 123px',

  [theme.breakpoints.up('xs')]: {
    padding: '0 20px',
  },
  [theme.breakpoints.up('sm')]: {
    padding: '0 34px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0 42px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '0 123px',
    maxWidth: '1366px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '0 123px',
  },
}));

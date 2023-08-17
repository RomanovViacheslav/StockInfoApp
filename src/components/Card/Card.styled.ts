import { Card, CardContent } from '@mui/material';
import styled from '@emotion/styled';
import { StyledCardProps } from './Card.types';

export const StyledCard = styled(Card)<StyledCardProps>(({ theme }) => ({
  width: '100%',
  boxShadow: 'none',
  borderRadius: '20px',
  height: '100%',
  position: 'relative',
  cursor: 'pointer',
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
  [theme.breakpoints.down('xs')]: {},

  '&  .MuiCardContent-root': {
    background: theme.palette.secondary.light,
    zIndex: 3,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '30px',
    transition: 'height 0.3s ease',
    padding: '5px 15px',

  },
  '&:hover': {
    '& .MuiCardContent-root': {
    height: '50%',
  },
  },

}));
